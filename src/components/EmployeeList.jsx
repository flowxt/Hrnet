import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'react-table-librairy';
import EmployeeCard from './EmployeeCard';
import { generateEmployees } from "../data/mockData";
// Importez vos actions (à créer si elles n'existent pas)
import { removeEmployee, archiveEmployee } from "../actions";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const reduxEmployees = useSelector(state => state.employees.employees) || [];
  
  // Combine les données mockées avec les données Redux
  const mockEmployees = useMemo(() => {
    // Si nous avons des données réelles au dessus de 10, ne pas utiliser les mocks
    if (reduxEmployees.length > 15) {
      return reduxEmployees;
    }
    // Sinon, utiliser les données mockées
    return generateEmployees(100);
  }, [reduxEmployees]);

  const data = useMemo(() => {
    return mockEmployees.map(emp => ({
      ...emp,
      dateOfBirth: new Date(emp.dateOfBirth).toLocaleDateString(),
      startDate: new Date(emp.startDate).toLocaleDateString(),
    }));
  }, [mockEmployees]);

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
    []
  );

  // Gestionnaire pour la suppression d'un employé
  const handleDelete = (employee) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer ${employee.firstName} ${employee.lastName} ?`)) {
      dispatch(removeEmployee(employee.id));
    }
  };

  // Gestionnaire pour l'archivage d'un employé (à implémenter dans les actions Redux)
  const handleArchive = (employee) => {
    if (window.confirm(`Voulez-vous archiver l'employé ${employee.firstName} ${employee.lastName} ?`)) {
      dispatch(archiveEmployee(employee.id));
    }
  };

  // Gestionnaire pour le changement de taille de page
  const handlePageSizeChange = (size) => {
    setPageSize(size);
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Employés actuels</h1>
      
      {data.length === 0 ? (
        <p className="text-center text-gray-600">Aucun employé trouvé.</p>
      ) : (
        <>
          <div className="hidden md:block">
            <Table 
              data={data} 
              columns={columns} 
              pageSize={pageSize}
              showGlobalFilter={true}  
              enableSorting={true}     
              ariaLabel="Liste des employés"
              onDelete={handleDelete}
              onArchive={handleArchive}
              pageSizeOptions={[10, 25, 50, 100]}
            />
          </div>
          <div className="md:hidden">
            {/* Pour la version mobile, ajouter également la suppression/archivage */}
            {data.map((employee, index) => (
              <div key={index} className="mb-4 relative">
                <EmployeeCard employee={employee} />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button 
                    onClick={() => handleArchive(employee)}
                    className="p-1 bg-yellow-100 rounded-full text-yellow-600 hover:bg-yellow-200"
                    aria-label="Archiver"
                  >
                    A
                  </button>
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

      <Link to="/" className="text-green-600 hover:underline mt-4 block text-center">Accueil</Link>
    </div>
  );
};

export default EmployeeList;