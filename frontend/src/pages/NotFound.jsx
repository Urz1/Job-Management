import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen p-4">
      <FaExclamationTriangle style={{ color: '#f59e0b' }} className="text-2xl w-16 mb-4" title="Error" />
      <h1 className="flex-1 font-bold text-2xl mb-4">404 Not Found</h1>
      <h3>This page does not exist</h3>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Go Back
      </Link>
    </section>
  );
};

export default NotFound;
