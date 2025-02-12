import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-slate-400 to-black text-white">
      <div className="flex-grow flex flex-col justify-center items-center py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">Wealth <span className='text-white bg-gradient-to-r from-blue-400 to-blue-900 p-2'>Health</span></h1>
          <p className="text-xl md:text-3xl lg:text-5xl">L'innovation au service des finances.</p>
        </div>
        <div className="mt-8 flex space-x-4">
          <Link to="/create-employee" className="bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105">
            Créer un nouvel employé
          </Link>
          <Link to="/employee-list" className="bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105">
            Voir la liste des employés
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;