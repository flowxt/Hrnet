import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import './index.css';
import Home from './components/Home';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import { loadEmployees } from './actions';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    dispatch(loadEmployees(employees));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
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