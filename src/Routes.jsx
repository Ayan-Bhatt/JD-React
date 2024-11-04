import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import UpdateJD from './components/UpdateJD';
import AdminDescription from './components/AdminDescription';
import UserJDTally from './components/UserJDTally';
import TallyResults from './components/TallyResults';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/update-jd" element={<UpdateJD />} />
      <Route path="/admin-description" element={<AdminDescription />} /> 
      <Route path="/user-jd-tally" element={<UserJDTally />} />
      <Route path="/tally-results" element={<TallyResults />} />
    </Routes>
  );
}

export default AppRoutes;
