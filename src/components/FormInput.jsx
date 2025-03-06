// import React from 'react';

// /**
//  * Composant FormInput - Champ de formulaire avec gestion d'erreur et icône
//  * 
//  * @param {string} label - Texte du label affiché au-dessus du champ
//  * @param {string} name - Nom du champ (utilisé pour identifier le champ dans le formulaire)
//  * @param {string} value - Valeur actuelle du champ
//  * @param {Function} onChange - Fonction appelée lors de la modification du champ
//  * @param {string} error - Message d'erreur à afficher (null si pas d'erreur)
//  * @param {string} placeholder - Texte indicatif affiché quand le champ est vide
//  * @param {Component} icon - Composant icône à afficher à gauche du champ (optionnel)
//  */
// const FormInput = ({ label, name, value, onChange, error, placeholder, icon: Icon }) => {
//   return (
//     <div className="relative">
//       {/* Label du champ avec style adapté */}
//       <label className="block text-gray-700 text-sm font-medium mb-2">{label}</label>
      
//       {/* Champ de saisie avec styles conditionnels basés sur l'état d'erreur */}
//       <input
//         type="text"
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`w-full pl-12 pr-4 py-3 border-2 ${
//           // Bordure rouge si erreur, sinon grise
//           error ? 'border-red-500' : 'border-gray-200'
//         } rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all`}
//         placeholder={placeholder}
//       />
      
//       {/* Affichage conditionnel de l'icône (si fournie) */}
//       {Icon && <Icon className="w-6 h-6 absolute left-4 top-[38px] text-green-500" />}
      
//       {/* Affichage conditionnel du message d'erreur */}
//       {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
//     </div>
//   );
// };

// export default FormInput;