

import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ForStudents from './pages/Forstudents';
import SelfEmployed from './pages/SelfEmployed';
import WorkingProfessionals from './pages/WorkingProfessionals';
import InstantLoanInfo from './pages/getloan';
import LoanApplicationForm from './pages/LoanApplication';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loans/student" element={<ForStudents />} />
        <Route path="/loans/self-employed" element={<SelfEmployed />} />
        <Route path="/loans/working-professionals" element={<WorkingProfessionals />} />
        <Route path="/apply" element={<InstantLoanInfo />} />
        <Route path="/loan-application" element={<LoanApplicationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;




