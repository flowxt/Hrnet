import React from 'react';
import DatePicker from 'react-datepicker';         // Bibliothèque pour les sélecteurs de date
import Select from 'react-select';                 // Bibliothèque pour les menus déroulants améliorés
import { UserIcon, CalendarIcon, HomeIcon } from '@heroicons/react/24/solid'; // Icônes pour l'UI
// Import des données pour les options des menus déroulants
import { departmentOptions, states } from '../data/options';

/**
 * Composant EmployeeForm - Gère l'affichage des champs de formulaire par étape
 * 
 * Ce composant utilise un affichage conditionnel pour montrer différentes sections du formulaire
 * en fonction de l'étape actuelle (1-4). Il intègre la validation des champs et l'affichage des erreurs.
 * 
 * @param {number} step - Étape actuelle du formulaire (1-4)
 * @param {Object} employee - Données de l'employé en cours d'édition
 * @param {Object} errors - Objets contenant les messages d'erreur par champ
 * @param {Function} handleChange - Fonction de gestion des changements pour les champs texte et select
 * @param {Function} handleDateChange - Fonction spécifique pour les changements de date
 */
const EmployeeForm = ({ step, employee, errors, handleChange, handleDateChange }) => {
  return (
    // Container du formulaire avec ombre et coins arrondis (UI)
    <form className="bg-white shadow-xl rounded-2xl px-8 pt-10 pb-8 mb-6">
      
      {/* ÉTAPE 1 : Informations personnelles (prénom et nom) */}
      {step === 1 && (
        <div className="space-y-6">
          {/* Champ Prénom avec icône et validation */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Prénom</label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.firstName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all`}
              placeholder="Prénom"
            />
            {/* Icône positionnée absolument dans le champ */}
            <UserIcon className="w-6 h-6 absolute left-4 top-[38px] text-green-500" />
            {/* Message d'erreur affiché conditionnellement */}
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          
          {/* Champ Nom de famille avec icône et validation */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Nom de famille</label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.lastName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all`}
              placeholder="Nom de famille"
            />
            <UserIcon className="w-6 h-6 absolute left-4 top-[38px] text-green-500" />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>
      )}

      {/* ÉTAPE 2 : Dates importantes (naissance et embauche) */}
      {step === 2 && (
        <div className="space-y-6">
          {/* Sélecteur de date de naissance avec composant DatePicker */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Date de naissance</label>
            <DatePicker
              selected={employee.dateOfBirth}
              onChange={(date) => handleDateChange('dateOfBirth', date)}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all`}
              placeholderText="Date de naissance"
              showYearDropdown           // Permet de sélectionner facilement l'année
              scrollableYearDropdown     // Année sélectionnable via défilement
              yearDropdownItemNumber={50} // Nombre d'années affichées dans le dropdown
              dateFormat="dd/MM/yyyy"    // Format de date adapté à la locale française
            />
            <CalendarIcon className="w-6 h-6 absolute left-4 top-[38px] text-purple-500" />
            {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
          </div>
          
          {/* Sélecteur de date d'embauche avec composant DatePicker */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Date d'embauche</label>
            <DatePicker
              selected={employee.startDate}
              onChange={(date) => handleDateChange('startDate', date)}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.startDate ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all`}
              placeholderText="Date d'embauche"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={50}
              dateFormat="dd/MM/yyyy"
            />
            <CalendarIcon className="w-6 h-6 absolute left-4 top-[38px] text-purple-500" />
            {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
          </div>
        </div>
      )}

      {/* ÉTAPE 3 : Adresse complète (rue, ville, état, code postal) */}
      {step === 3 && (
        <div className="space-y-6">
          {/* Champ Rue */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Rue</label>
            <input
              type="text"
              name="street"
              value={employee.street}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.street ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all`}
              placeholder="Rue"
            />
            <HomeIcon className="w-6 h-6 absolute left-4 top-[38px] text-green-500" />
            {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
          </div>
          
          {/* Champ Ville */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Ville</label>
            <input
              type="text"
              name="city"
              value={employee.city}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.city ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all`}
              placeholder="Ville"
            />
            <HomeIcon className="w-6 h-6 absolute left-4 top-[38px] text-green-500" />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
          
          {/* Menu déroulant État avec react-select */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">État</label>
            <Select
              name="state"
              value={states.find(option => option.value === employee.state)}  // Trouve l'option correspondant à la valeur actuelle
              onChange={(selectedOption) => handleChange({ target: { name: 'state', value: selectedOption.value } })}  // Transforme l'événement pour la compatibilité
              options={states}  // Liste des états définie dans options.js
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.state ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all`}
              placeholder="Sélectionnez l'état"
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>
          
          {/* Champ Code postal */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Code postal</label>
            <input
              type="text"
              name="zipCode"
              value={employee.zipCode}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.zipCode ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all`}
              placeholder="Code postal"
            />
            <HomeIcon className="w-6 h-6 absolute left-4 top-[38px] text-green-500" />
            {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
          </div>
        </div>
      )}

      {/* ÉTAPE 4 : Département (dernière étape) */}
      {step === 4 && (
        <div className="space-y-6">
          {/* Menu déroulant Département avec react-select */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Département</label>
            <Select
              name="department"
              value={departmentOptions.find(option => option.value === employee.department)}  // Trouve l'option correspondant à la valeur actuelle
              onChange={(selectedOption) => handleChange({ target: { name: 'department', value: selectedOption.value } })}
              options={departmentOptions}  // Liste des départements définie dans options.js
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.department ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all`}
              placeholder="Sélectionnez le département"
            />
            {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
          </div>
        </div>
      )}
    </form>
  );
};

// Export du composant
export default EmployeeForm;