import React from 'react';

const StepNavigation = ({ step, handlePrevious, handleNext, handleSave }) => {
  return (
    <div className="flex justify-between mt-8">
      {step > 1 && (
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
        >
          ← Précédent
        </button>
      )}
      {step < 4 && (
        <button
          type="button"
          onClick={handleNext}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
        >
          Suivant →
        </button>
      )}
      {step === 4 && (
        <button
          type="button"
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
        >
          Enregistrer
        </button>
      )}
    </div>
  );
};

export default StepNavigation;