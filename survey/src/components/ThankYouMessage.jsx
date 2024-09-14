import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-4">Thank you for your feedback!</h2>
      <p className="text-lg mb-6">We appreciate your time and input.</p>
      <Link to="/">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition-colors">
          Home
        </button>
      </Link>
    </div>
  );
};

export default ThankYouMessage;
