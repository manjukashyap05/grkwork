import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeUser from './components/WelcomeUser';
import Survey from './components/Survey'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeUser />} />
      <Route path="/survey" element={<Survey />} />
    </Routes>
  );
};

export default App;
