import React from 'react';

const ProgressBar = ({ step, totalSteps }) => {
  return (
    <div className="mb-8">
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transition-all duration-500" 
          style={{ width: `${(step / totalSteps) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>Étape {step} sur {totalSteps}</span>
        <span>{['Information', 'Dates', 'Adresse', 'Département'][step - 1]}</span>
      </div>
    </div>
  );
};

export default ProgressBar;