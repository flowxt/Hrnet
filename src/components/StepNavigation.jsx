import React from 'react';

/**
 * Composant StepNavigation - Navigation entre les étapes du formulaire
 * 
 * Gère l'affichage contextuel des boutons de navigation selon l'étape actuelle
 * du formulaire multi-étapes pour la création d'employés.
 * 
 * @param {number} step - Étape actuelle du formulaire (1-4)
 * @param {Function} handlePrevious - Fonction pour revenir à l'étape précédente
 * @param {Function} handleNext - Fonction pour passer à l'étape suivante
 * @param {Function} handleSave - Fonction pour enregistrer le formulaire complet
 */
const StepNavigation = ({ step, handlePrevious, handleNext, handleSave }) => {
  return (
    <div className="flex justify-between mt-8">
      {/* Bouton Précédent - Affiché à partir de la 2ème étape */}
      {step > 1 && (
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
          aria-label="Revenir à l'étape précédente"
        >
          ← Précédent
        </button>
      )}
      
      {/* Bouton Suivant - Affiché pour toutes les étapes sauf la dernière */}
      {step < 4 && (
        <button
          type="button"
          onClick={handleNext}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
          aria-label="Passer à l'étape suivante"
        >
          Suivant →
        </button>
      )}
      
      {/* Bouton Enregistrer - Uniquement affiché à la dernière étape */}
      {step === 4 && (
        <button
          type="button"
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
          aria-label="Enregistrer l'employé"
        >
          Enregistrer
        </button>
      )}
    </div>
  );
};

export default StepNavigation;