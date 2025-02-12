import React, { useState } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: { globalFilter, pageIndex },
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
  } = useTable(
    { columns, data, initialState: { pageSize } },
    useGlobalFilter,
    usePagination
  );

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Employés actuels</h1>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <label className="mr-2 text-gray-700">Afficher</label>
          <select
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}
            className="border-2 border-gray-200 rounded-xl py-2 px-4"
          >
            {[10, 25, 50, 100].map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span className="ml-2 text-gray-700">entrées</span>
        </div>
        <div className="relative">
          <input
            value={globalFilter || ''}
            onChange={e => setGlobalFilter(e.target.value)}
            className="border-2 border-gray-200 rounded-xl py-2 pl-10 pr-4"
            placeholder="Rechercher..."
          />
          <MagnifyingGlassIcon className="w-6 h-6 absolute left-3 top-2 text-gray-500" />
        </div>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-600">Aucun employé trouvé.</p>
      ) : (
        <>
          <div className="hidden md:block">
            <table {...getTableProps()} className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                {headerGroups.map((headerGroup, index) => (
                  <tr key={index} {...headerGroup.getHeaderGroupProps()} className="border-b">
                    {headerGroup.headers.map((column, colIndex) => (
                      <th key={colIndex} {...column.getHeaderProps()} className="text-left py-3 px-4 font-medium text-gray-700">{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                    <tr key={rowIndex} {...row.getRowProps()} className="border-b">
                      {row.cells.map((cell, cellIndex) => (
                        <td key={cellIndex} {...cell.getCellProps()} className="py-3 px-4 text-gray-600">{cell.render('Cell')}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="md:hidden">
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <EmployeeCard key={rowIndex} employee={row.original} />
              );
            })}
          </div>
        </>
      )}

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="px-4 py-2 border rounded-l-xl bg-gray-200 hover:bg-gray-300">{"<<"}</button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage} className="px-4 py-2 border bg-gray-200 hover:bg-gray-300">{"<"}</button>
          <button onClick={() => nextPage()} disabled={!canNextPage} className="px-4 py-2 border bg-gray-200 hover:bg-gray-300">{">"}</button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="px-4 py-2 border rounded-r-xl bg-gray-200 hover:bg-gray-300">{">>"}</button>
        </div>
        <span className="text-gray-700">
          Page{' '}
          <strong>
            {pageIndex + 1} sur {pageCount}
          </strong>
        </span>
      </div>

      <Link to="/" className="text-blue-600 hover:underline mt-4 block text-center">Accueil</Link>
    </div>
  );
};

export default EmployeeList;