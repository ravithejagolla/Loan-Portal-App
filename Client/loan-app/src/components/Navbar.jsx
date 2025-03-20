import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" shadow-md p-4 flex justify-between items-center bg-blue-300 text-white">
      <Link to="/" className="text-xl font-bold text-blue-600">LoanPortal</Link>
      <div className="space-x-4">
        <Link to="/loans/student" className="text-gray-700 mr-5 hover:text-blue-500">For Students</Link>
        <Link to="/loans/self-employed" className="text-gray-700 ml-5 hover:text-blue-500">Self-Employed</Link>
        <Link to="/loans/working-professionals" className="text-gray-700 ml-5  hover:text-blue-500">Working Professionals</Link>
      </div>
      <Link to="/apply" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Get Loan</Link>
    </nav>
  );
};

export default Navbar;


