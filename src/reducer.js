// Import des types d'actions depuis le fichier actions.js
import {
  ADD_EMPLOYEE,
  LOAD_EMPLOYEES,
  REMOVE_EMPLOYEE,
  ARCHIVE_EMPLOYEE,
} from "./actions";

// Définition de l'état initial
// Initialise un tableau vide pour stocker les employés
const initialState = {
  employees: [],
  archivedEmployees: [], // Nouveau tableau pour stocker les employés archivés
};

// Définition du reducer pour gérer les employés
// Prend en paramètres l'état actuel (avec une valeur par défaut) et l'action à traiter
const employeeReducer = (state = initialState, action) => {
  // Utilisation d'un switch pour gérer les différents types d'actions
  switch (action.type) {
    // Cas : J'ajoute un nouvel employé
    case ADD_EMPLOYEE:
      return {
        ...state, // Copie de l'état existant
        employees: [...state.employees, action.payload], // J'ajoute du nouvel employé à la fin du tableau
      };

    // Cas : Chargement d'une liste d'employés
    case LOAD_EMPLOYEES:
      return {
        ...state, // Copie de l'état existant
        employees: action.payload, // Remplacement complet du tableau d'employés
      };

    // Cas : Suppression d'un employé
    case REMOVE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((emp) => emp.id !== action.payload),
      };

    // Cas : Archivage d'un employé
    case ARCHIVE_EMPLOYEE:
      const employeeToArchive = state.employees.find(
        (emp) => emp.id === action.payload
      );
      return {
        ...state,
        // Retirer l'employé du tableau principal
        employees: state.employees.filter((emp) => emp.id !== action.payload),
        // Ajouter l'employé au tableau des archives
        archivedEmployees: [...state.archivedEmployees, employeeToArchive],
      };

    // Cas par défaut : retourne l'état sans modification
    default:
      return state;
  }
};

// Export du reducer pour utilisation dans le store Redux
export default employeeReducer;
