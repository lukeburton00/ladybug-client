import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Home from './components/pages/Home';
import Navbar from './components/nav/Navbar.jsx';
import Footer from './components/nav/Footer.jsx';
import LoginForm from './components/auth/LoginForm.jsx';
import RegisterPage from './components/auth/RegisterForm.jsx';
import Dashboard from './components/dashboard/Dashboard';
import NewProjectForm from './components/projects/NewProjectForm';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <div class="container content my-5 py-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="create-project" element={<NewProjectForm />} />
        </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
