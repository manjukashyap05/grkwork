import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';
  const WelcomeUser = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/survey'); 
  };

  return (
    <div className="flex items-center justify-center bg-black text-white min-h-screen">
      <div className="text-center">
        <p className="text-4xl font-bold text-shadow">Welcome Customer</p>
        <button 
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded my-10"
          onClick={handleStart}
        >
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default WelcomeUser;
