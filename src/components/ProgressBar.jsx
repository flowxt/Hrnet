import React from 'react';

/**
 * Composant ProgressBar - Affiche la progression dans le processus de formulaire multi-étapes
 * 
 * Fournit un indicateur visuel de l'avancement dans le processus de création d'un employé,
 * avec le nom de l'étape actuelle et le rapport étape actuelle/total.
 * 
 * @param {number} step - Étape actuelle du formulaire (commence à 1)
 * @param {number} totalSteps - Nombre total d'étapes du formulaire
 */
const ProgressBar = ({ step, totalSteps }) => {
  return (
    <div className="mb-8">
      {/* Conteneur de la barre de progression avec arrière-plan gris */}
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        {/* Barre colorée qui s'étend en fonction de l'étape actuelle */}
        <div 
          className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 transition-all duration-500" 
          style={{ width: `${(step / totalSteps) * 100}%` }} // Calcul du pourcentage d'avancement
        ></div>
      </div>
      
      {/* Informations textuelles sous la barre de progression */}
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        {/* Indicateur numérique d'avancement */}
        <span>Étape {step} sur {totalSteps}</span>
        
        {/* Nom de l'étape actuelle à partir d'un tableau prédéfini */}
        <span>{['Information', 'Dates', 'Adresse', 'Département'][step - 1]}</span>
      </div>
    </div>
  );
};

export default ProgressBar;