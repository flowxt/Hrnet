import React, { useState } from 'react';            // React et hook d'état
import { useDispatch } from 'react-redux';          // Hook Redux pour dispatcher des actions
import { useNavigate } from 'react-router-dom';     // Hook de navigation entre routes
import CustomModal from './CustomModal';            // Composant modal personnalisé pour les confirmations
import EmployeeForm from './EmployeeForm';          // Composant de formulaire d'employé
import ProgressBar from './ProgressBar';            // Barre de progression pour le formulaire multi-étapes
import StepNavigation from './StepNavigation';      // Navigation entre étapes du formulaire
import { addEmployee } from '../actions';           // Action Redux pour ajouter un employé
import 'react-datepicker/dist/react-datepicker.css'; // Styles pour le datepicker
import { CheckIcon } from '@heroicons/react/24/solid'; // Icône de succès

/**
 * Composant CreateEmployee - Formulaire multi-étapes de création d'employé
 * 
 * Implémente un système de formulaire avec validation par étape pour améliorer l'expérience utilisateur.
 * Utilise Redux pour la gestion d'état global et localStorage pour la persistance.
 */
const CreateEmployee = () => {
  // -- HOOKS --
  const dispatch = useDispatch();  // Accès aux actions Redux
  const navigate = useNavigate();  // Navigation programmatique

  // -- ÉTATS LOCAUX --
  // État pour suivre l'étape actuelle du formulaire (1 à 4)
  const [step, setStep] = useState(1);
  
  // État pour contrôler l'affichage du modal de confirmation
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  
  // État contenant les données de l'employé en cours d'édition
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),    // Initialisation avec la date du jour
    startDate: new Date(),      // Initialisation avec la date du jour
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });
  
  // État pour gérer les messages d'erreur de validation par champ
  const [errors, setErrors] = useState({});

  // -- GESTIONNAIRES D'ÉVÉNEMENTS --
  
  // Met à jour les champs textuels de l'état employee
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });  // Mise à jour immersive avec spread operator
  };

  // Met à jour spécifiquement les champs de type date
  const handleDateChange = (name, date) => {
    setEmployee({ ...employee, [name]: date });
  };

  // -- VALIDATION DES DONNÉES --
  // Valide les données selon l'étape actuelle et retourne true si valide
  const validateStep = () => {
    let newErrors = {};
    
    // Validation spécifique à chaque étape
    if (step === 1) {
      // Étape 1: Informations personnelles
      if (!employee.firstName) newErrors.firstName = 'Veuillez saisir le prénom';
      if (!employee.lastName) newErrors.lastName = 'Veuillez saisir le nom de famille';
    } else if (step === 2) {
      // Étape 2: Dates importantes
      if (!employee.dateOfBirth) newErrors.dateOfBirth = 'Veuillez saisir la date de naissance';
      if (!employee.startDate) newErrors.startDate = 'Veuillez saisir la date d\'embauche';
    } else if (step === 3) {
      // Étape 3: Adresse complète
      if (!employee.street) newErrors.street = 'Veuillez saisir la rue';
      if (!employee.city) newErrors.city = 'Veuillez saisir la ville';
      if (!employee.state) newErrors.state = 'Veuillez sélectionner l\'état';
      if (!employee.zipCode) newErrors.zipCode = 'Veuillez saisir le code postal';
    } else if (step === 4) {
      // Étape 4: Département
      if (!employee.department) newErrors.department = 'Veuillez sélectionner le département';
    }
    
    // Mise à jour de l'état des erreurs
    setErrors(newErrors);
    
    // Retourne true si aucune erreur n'a été détectée
    return Object.keys(newErrors).length === 0;
  };

  // -- NAVIGATION ENTRE ÉTAPES --
  // Passe à l'étape suivante si validation OK
  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  // Retourne à l'étape précédente (sans validation)
  const handlePrevious = () => {
    setStep(step - 1);
  };

  // -- SAUVEGARDE ET FINALISATION --
  // Sauvegarde l'employé dans Redux et localStorage
  const handleSave = () => {
    // Préparation des données pour stockage (conversion des dates en ISO)
    const employeeToSave = {
      ...employee,
      dateOfBirth: employee.dateOfBirth.toISOString(),
      startDate: employee.startDate.toISOString(),
    };
    
    // Dispatch de l'action Redux pour ajouter l'employé
    dispatch(addEmployee(employeeToSave));
  
    // Persistance des données dans localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employeeToSave);
    localStorage.setItem('employees', JSON.stringify(employees));
  
    // Affichage du modal de confirmation
    setModalIsOpen(true);
  };

  // -- FONCTIONS DE NAVIGATION --
  // Ferme le modal et retourne à l'accueil
  const closeModal = () => {
    setModalIsOpen(false);
    navigate('/');  // Navigation programmatique vers l'accueil
  };
  
  // Navigation directe vers l'accueil
  const goToHome = () => {
    navigate('/');
  };

  // -- RENDU DU COMPOSANT --
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      {/* Barre de progression visuelle */}
      <ProgressBar step={step} totalSteps={4} />
  
      {/* Formulaire qui change selon l'étape actuelle */}
      <EmployeeForm
        step={step}
        employee={employee}
        errors={errors}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />
  
      {/* Boutons de navigation entre étapes */}
      <StepNavigation 
        step={step} 
        handlePrevious={handlePrevious} 
        handleNext={handleNext} 
        handleSave={handleSave} 
      />
  
      {/* Bouton d'abandon/retour à l'accueil */}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={goToHome}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
        >
          Accueil
        </button>
      </div>

      {/* Modal de confirmation avec animation */}
      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm mx-auto">
          {/* Icône de succès avec cercle */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckIcon className="w-8 h-8 text-green-600" />
          </div>
          {/* Message de confirmation */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Employé créé avec succès !</h3>
          <p className="text-gray-600 mb-6">L'employé a été correctement enregistré dans le système.</p>
          {/* Bouton de retour à l'accueil */}
          <button
            onClick={closeModal}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
          >
            Retour à l'accueil
          </button>
        </div>
      </CustomModal>
    </div>
  );
};

export default CreateEmployee;