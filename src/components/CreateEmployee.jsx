import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../actions';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';


const departmentOptions = [
  { value: 'Sales', label: 'Sales' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Human Resources', label: 'Human Resources' },
  { value: 'Legal', label: 'Legal' }
];
const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [states, setStates] = useState([]);
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

  useEffect(() => {
    // Charger les états
    setStates([
      { value: 'AL', label: 'Alabama' },
      { value: 'AK', label: 'Alaska' },
      // ... autres états
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setEmployee({ ...employee, [name]: date });
  };

  const handleSave = () => {
    const employeeToSave = {
      ...employee,
      dateOfBirth: employee.dateOfBirth.toISOString(),
      startDate: employee.startDate.toISOString(),
    };
    dispatch(addEmployee(employeeToSave));
    alert('Employee Created!');
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create New Employee</h2>
    
    <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      {/* Personal Info Section */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Date of Birth</label>
            <DatePicker
              selected={employee.dateOfBirth}
              onChange={(date) => handleDateChange('dateOfBirth', date)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Start Date</label>
            <DatePicker
              selected={employee.startDate}
              onChange={(date) => handleDateChange('startDate', date)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
      </div>
  
      {/* Address Section */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Address Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Street</label>
            <input
              type="text"
              name="street"
              value={employee.street}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">City</label>
              <input
                type="text"
                name="city"
                value={employee.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">State</label>
              <Select
                options={states}
                onChange={(selectedOption) => setEmployee({ ...employee, state: selectedOption.value })}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Zip Code</label>
              <input
                type="number"
                name="zipCode"
                value={employee.zipCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
  
      {/* Department Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Department Information</h3>
        <div className="w-full md:w-1/2">
          <label className="block text-gray-700 text-sm font-medium mb-2">Department</label>
          <Select
            options={departmentOptions}
            onChange={(selectedOption) => setEmployee({ ...employee, department: selectedOption.value })}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
      </div>
  
      {/* Buttons */}
      <div className="flex items-center justify-between space-x-4">
        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-black font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Save Employee
        </button>
        
        <Link 
          to="/employee-list" 
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors duration-200"
        >
          View Employee List
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </form>
  </div>
  );
};

export default CreateEmployee;