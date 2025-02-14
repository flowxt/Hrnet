export const ADD_EMPLOYEE = "ADD_EMPLOYEE"; // Action pour ajouter un employé
export const LOAD_EMPLOYEES = "LOAD_EMPLOYEES"; // Action pour charger la liste des employés

// Action creator pour ajouter un nouvel employé
// Prend un objet employee en paramètre et retourne une action
export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE, // Type de l'action
  payload: employee, // Données de l'employé à ajouter
});

// Action creator pour charger une liste d'employés
// Prend un tableau employees en paramètre et retourne une action
export const loadEmployees = (employees) => ({
  type: LOAD_EMPLOYEES, // Type de l'action
  payload: employees, // Tableau d'employés à charger
});
