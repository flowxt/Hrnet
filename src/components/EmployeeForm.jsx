import React from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { UserIcon, CalendarIcon, HomeIcon } from '@heroicons/react/24/solid';
// Import de mes données data (menu déroulant)
import { departmentOptions, states } from '../data/options';

// Composant de formulaire employé 

const EmployeeForm = ({ step, employee, errors, handleChange, handleDateChange }) => {
  return (
    // Container de mon formulaire
    <form className="bg-white shadow-xl rounded-2xl px-8 pt-10 pb-8 mb-6">
      
      {/* Etapes 1 : Les informations */}
      {step === 1 && (
        // code des champs prénom et nom de famille
        <div className="space-y-6">
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Prénom</label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.firstName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
              placeholder="Prénom"
            />
            <UserIcon className="w-6 h-6 absolute left-4 top-[38px] text-blue-500" />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Nom de famille</label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.lastName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
              placeholder="Nom de famille"
            />
            <UserIcon className="w-6 h-6 absolute left-4 top-[38px] text-blue-500" />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>
      )}

      {/* Etape 2 : Les dates  */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Date de naissance</label>
            <DatePicker
              selected={employee.dateOfBirth}
              onChange={(date) => handleDateChange('dateOfBirth', date)}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
              placeholderText="Date de naissance"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={50}
              dateFormat="dd/MM/yyyy"
            />
            <CalendarIcon className="w-6 h-6 absolute left-4 top-[38px] text-purple-500" />
            {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
          </div>
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Date d'embauche</label>
            <DatePicker
              selected={employee.startDate}
              onChange={(date) => handleDateChange('startDate', date)}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.startDate ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
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

      {/* Etapes 3 : Les informations de contact */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Rue</label>
            <input
              type="text"
              name="street"
              value={employee.street}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.street ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
              placeholder="Rue"
            />
            <HomeIcon className="w-6 h-6 absolute left-4 top-[38px] text-green-500" />
            {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
          </div>
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Ville</label>
            <input
              type="text"
              name="city"
              value={employee.city}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.city ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
              placeholder="Ville"
            />
            <HomeIcon className="w-6 h-6 absolute left-4 top-[38px] text-green-500" />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">État</label>
            <Select
              name="state"
              value={states.find(option => option.value === employee.state)}
              onChange={(selectedOption) => handleChange({ target: { name: 'state', value: selectedOption.value } })}
              options={states}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.state ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
              placeholder="Sélectionnez l'état"
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Code postal</label>
            <input
              type="text"
              name="zipCode"
              value={employee.zipCode}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.zipCode ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
              placeholder="Code postal"
            />
            <HomeIcon className="w-6 h-6 absolute left-4 top-[38px] text-green-500" />
            {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
          </div>
        </div>
      )}

      {/* Etape 4 : Le département */}
      {step === 4 && (
        <div className="space-y-6">
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">Département</label>
            <Select
              name="department"
              value={departmentOptions.find(option => option.value === employee.department)}
              onChange={(selectedOption) => handleChange({ target: { name: 'department', value: selectedOption.value } })}
              options={departmentOptions}
              className={`w-full pl-12 pr-4 py-3 border-2 ${errors.department ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all`}
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