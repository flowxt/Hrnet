import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from './common/Table';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
  const employees = useSelector(state => state.employees.employees) || [];
  const [pageSize, setPageSize] = useState(10);

  const data = React.useMemo(() => {
    return Array.isArray(employees)
      ? employees.map(emp => ({
          ...emp,
          dateOfBirth: new Date(emp.dateOfBirth).toLocaleDateString(),
          startDate: new Date(emp.startDate).toLocaleDateString(),
        }))
      : [];
  }, [employees]);

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
            />
          </div>
          <div className="md:hidden">
            {data.map((employee, index) => (
              <EmployeeCard key={index} employee={employee} />
            ))}
          </div>
        </>
      )}

      <Link to="/" className="text-green-600 hover:underline mt-4 block text-center">Accueil</Link>
    </div>
  );
};

export default EmployeeList;