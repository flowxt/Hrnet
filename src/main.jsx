import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <Hero />
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);