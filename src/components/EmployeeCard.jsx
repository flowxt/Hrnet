import React from 'react';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{employee.firstName} {employee.lastName}</h2>
      <p><strong>Date d'embauche:</strong> {employee.startDate}</p>
      <p><strong>Département:</strong> {employee.department}</p>
      <p><strong>Date de naissance:</strong> {employee.dateOfBirth}</p>
      <p><strong>Rue:</strong> {employee.street}</p>
      <p><strong>Ville:</strong> {employee.city}</p>
      <p><strong>État:</strong> {employee.state}</p>
      <p><strong>Code postal:</strong> {employee.zipCode}</p>
    </div>
  );
};

export default EmployeeCard;