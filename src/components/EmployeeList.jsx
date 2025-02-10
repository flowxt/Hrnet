import React from 'react';
import { useTable } from 'react-table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const employees = useSelector(state => state.employees.employees) || [];

  console.log("Redux employees:", employees);

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
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Start Date', accessor: 'startDate' },
      { Header: 'Department', accessor: 'department' },
      { Header: 'Date of Birth', accessor: 'dateOfBirth' },
      { Header: 'Street', accessor: 'street' },
      { Header: 'City', accessor: 'city' },
      { Header: 'State', accessor: 'state' },
      { Header: 'Zip Code', accessor: 'zipCode' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Current Employees</h1>
      {data.length === 0 ? (
        <p className="text-center text-gray-600">No employees found.</p>
      ) : (
        <table {...getTableProps()} className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            {headerGroups.map(headerGroup => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()} className="border-b">
                {headerGroup.headers.map(column => (
                  <th key={column.id} {...column.getHeaderProps()} className="text-left py-3 px-4 font-medium text-gray-700">{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()} className="border-b">
                  {row.cells.map(cell => (
                    <td key={cell.id} {...cell.getCellProps()} className="py-3 px-4 text-gray-600">{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Link to="/" className="text-blue-600 hover:underline mt-4 block text-center">Home</Link>
    </div>
  );
};

export default EmployeeList;