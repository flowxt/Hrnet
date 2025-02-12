import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomModal from './CustomModal';
import EmployeeForm from './EmployeeForm';
import ProgressBar from './ProgressBar';
import StepNavigation from './StepNavigation';
import { addEmployee } from '../actions';
import 'react-datepicker/dist/react-datepicker.css';
import { CheckIcon } from '@heroicons/react/24/solid';

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    startDate: new Date(),
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setEmployee({ ...employee, [name]: date });
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!employee.firstName) newErrors.firstName = 'Veuillez saisir le prénom';
      if (!employee.lastName) newErrors.lastName = 'Veuillez saisir le nom de famille';
    } else if (step === 2) {
      if (!employee.dateOfBirth) newErrors.dateOfBirth = 'Veuillez saisir la date de naissance';
      if (!employee.startDate) newErrors.startDate = 'Veuillez saisir la date d\'embauche';
    } else if (step === 3) {
      if (!employee.street) newErrors.street = 'Veuillez saisir la rue';
      if (!employee.city) newErrors.city = 'Veuillez saisir la ville';
      if (!employee.state) newErrors.state = 'Veuillez sélectionner l\'état';
      if (!employee.zipCode) newErrors.zipCode = 'Veuillez saisir le code postal';
    } else if (step === 4) {
      if (!employee.department) newErrors.department = 'Veuillez sélectionner le département';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSave = () => {
    const employeeToSave = {
      ...employee,
      dateOfBirth: employee.dateOfBirth.toISOString(),
      startDate: employee.startDate.toISOString(),
    };
    dispatch(addEmployee(employeeToSave));
  
    // Sauvegarder les employés dans le localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employeeToSave);
    localStorage.setItem('employees', JSON.stringify(employees));
  
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    navigate('/');
  };
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <ProgressBar step={step} totalSteps={4} />
  
      <EmployeeForm
        step={step}
        employee={employee}
        errors={errors}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />
  
      <StepNavigation 
        step={step} 
        handlePrevious={handlePrevious} 
        handleNext={handleNext} 
        handleSave={handleSave} 
      />
  
      {/* Bouton Accueil */}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={goToHome}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
        >
          Accueil
        </button>
      </div>

      {/* Modal modernisé */}
      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckIcon className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Employé créé avec succès !</h3>
          <p className="text-gray-600 mb-6">L'employé a été correctement enregistré dans le système.</p>
          <button
            onClick={closeModal}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
          >
            Retour à l'accueil
          </button>
        </div>
      </CustomModal>
    </div>
  );
};

export default CreateEmployee;