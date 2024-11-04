import React from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateJD() {
  const navigate = useNavigate();

  // Function to handle button click and navigate to AdminDescription page
  const handleButtonClick = () => {
    navigate('/admin-description'); // Navigate to /admin-description route
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Welcome Admin</h1>
      <button
        className="w-64 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleButtonClick} // Add click handler
      >
        Update JD
      </button>
      <button
        className="w-64 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleButtonClick} // Add click handler
      >
        Create JD
      </button>
    </div>
  );
}

export default UpdateJD;