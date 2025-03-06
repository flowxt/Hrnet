import React, { useState, useMemo } from 'react';        // Imports React et hooks essentiels
import { useSelector, useDispatch } from 'react-redux';  // Hooks Redux pour accéder au state et dispatcher des actions
import { Link } from 'react-router-dom';                 // Composant de navigation sans rechargement de page
import { Table } from 'react-table-librairy';            // Import de notre librairie de tableau personnalisée
import EmployeeCard from './EmployeeCard';               // Composant pour l'affichage mobile en carte
import { generateEmployees } from "../data/mockData";    // Fonction pour générer des données de test
// Import des actions Redux pour manipuler les données
import { removeEmployee, archiveEmployee } from "../actions";

/**
 * Composant EmployeeList - Affiche la liste des employés
 * 
 * Fonctionnalités:
 * - Affichage en tableau pour desktop et en cartes pour mobile (responsive)
 * - Intégration avec Redux pour la gestion d'état
 * - Utilisation de notre librairie Table personnalisée
 * - Suppression et archivage d'employés
 * - Génération de données mockées si nécessaire
 */
const EmployeeList = () => {
  // -- HOOKS ET ÉTAT --
  const dispatch = useDispatch();  // Hook pour dispatcher des actions Redux
  const [pageSize, setPageSize] = useState(10);  // État local pour la taille de page
  const reduxEmployees = useSelector(state => state.employees.employees) || [];  // Récupération des employés du store Redux
  
  // -- PRÉPARATION DES DONNÉES --
  // Combine les données mockées avec les données Redux pour la démo/développement
  const mockEmployees = useMemo(() => {
    // Si nous avons assez de données réelles, on les utilise
    if (reduxEmployees.length > 15) {
      return reduxEmployees;
    }
    // Sinon, on utilise des données générées pour la démo
    return generateEmployees(100);
  }, [reduxEmployees]);  // Recalcul uniquement quand les données Redux changent

  // Formatte les dates pour l'affichage
  const data = useMemo(() => {
    return mockEmployees.map(emp => ({
      ...emp,
      dateOfBirth: new Date(emp.dateOfBirth).toLocaleDateString(),  // Format de date localisé
      startDate: new Date(emp.startDate).toLocaleDateString(),      // Format de date localisé
    }));
  }, [mockEmployees]);  // Recalcul uniquement quand les données source changent

  // Configuration des colonnes du tableau
  const columns = React.useMemo(
    () => [
      { Header: 'Prénom', accessor: 'firstName' },
      { Header: 'Nom de famille', accessor: 'lastName' },
      { Header: 'Date d\'embauche', accessor: 'startDate' },
      { Header: 'Département', accessor: 'department' },
      { Header: 'Date de naissance', accessor: 'dateOfBirth' },
      { Header: 'Rue', accessor: 'street' },
      { Header: 'Ville', accessor: 'city' },
      { Header: 'État', accessor: 'state' },
      { Header: 'Code postal', accessor: 'zipCode' },
    ],
    []  // Les colonnes ne changent jamais, pas besoin de dépendances
  );

  // -- GESTIONNAIRES D'ÉVÉNEMENTS --
  // Gestionnaire pour la suppression d'un employé
  const handleDelete = (employee) => {
    // Confirmation avant suppression pour éviter les erreurs
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer ${employee.firstName} ${employee.lastName} ?`)) {
      dispatch(removeEmployee(employee.id));  // Dispatch de l'action Redux
    }
  };

  // Gestionnaire pour l'archivage d'un employé
  const handleArchive = (employee) => {
    // Confirmation avant archivage
    if (window.confirm(`Voulez-vous archiver l'employé ${employee.firstName} ${employee.lastName} ?`)) {
      dispatch(archiveEmployee(employee.id));  // Dispatch de l'action Redux
    }
  };

  // Gestionnaire pour le changement de taille de page du tableau
  const handlePageSizeChange = (size) => {
    setPageSize(size);
  };

  // -- RENDU DU COMPOSANT --
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Employés actuels</h1>
      
      {/* Affichage conditionnel basé sur la présence de données */}
      {data.length === 0 ? (
        <p className="text-center text-gray-600">Aucun employé trouvé.</p>
      ) : (
        <>
          {/* Vue tableau pour écrans moyens et larges (md:block = visible à partir de la breakpoint md) */}
          <div className="hidden md:block">
            <Table 
              data={data}                  // Données à afficher
              columns={columns}            // Configuration des colonnes
              pageSize={pageSize}          // Taille de page initiale
              showGlobalFilter={true}      // Affiche le champ de recherche global
              enableSorting={true}         // Active le tri des colonnes
              ariaLabel="Liste des employés" // Accessibilité
              onDelete={handleDelete}      // Fonction de suppression
              onArchive={handleArchive}    // Fonction d'archivage
              pageSizeOptions={[10, 25, 50, 100]} // Options de taille de page
            />
          </div>
          
          {/* Vue mobile avec cartes (visible uniquement sur petits écrans) */}
          <div className="md:hidden">
            {data.map((employee, index) => (
              <div key={index} className="mb-4 relative">
                {/* Carte d'employé */}
                <EmployeeCard employee={employee} />
                
                {/* Boutons d'action positionnés absolument sur la carte */}
                <div className="absolute top-2 right-2 flex space-x-2">
                  {/* Bouton d'archivage */}
                  <button 
                    onClick={() => handleArchive(employee)}
                    className="p-1 bg-yellow-100 rounded-full text-yellow-600 hover:bg-yellow-200"
                    aria-label="Archiver"
                  >
                    A
                  </button>
                  
                  {/* Bouton de suppression */}
                  <button 
                    onClick={() => handleDelete(employee)}
                    className="p-1 bg-red-100 rounded-full text-red-600 hover:bg-red-200"
                    aria-label="Supprimer"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Lien de navigation vers la page d'accueil */}
      <Link to="/" className="text-green-600 hover:underline mt-4 block text-center">Accueil</Link>
    </div>
  );
};

export default EmployeeList;