import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.png';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-slate-400 to-black text-white">
      <div className="flex-grow flex flex-col justify-center items-center py-8">
        <div className="text-center mb-12">
          <img src={logo} alt="Wealth Health" className="w-32 h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">Wealth <span className='text-white bg-gradient-to-r from-green-400 to-green-900 p-2'>Health</span></h1>
          <p className="text-xl md:text-3xl lg:text-5xl">L'innovation au service des finances.</p>
        </div>
        <div className="mt-8 flex space-x-4">
          <Link to="/create-employee" className="bg-gradient-to-r from-green-500 to-green-900 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105">
            Créer un nouvel employé
          </Link>
          <Link to="/employee-list" className="bg-gradient-to-r from-green-500 to-green-900 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105">
            Voir la liste des employés
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;