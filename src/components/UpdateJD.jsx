import React from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateJD() {
  const navigate = useNavigate();

  // Navigate to AdminDescription
  const handleButtonClick = () => {
    navigate('/admin-description');
  };

  // Navigate to BulkUpdate
  const handleBulkUpdateClick = () => {
    navigate('/bulk-update');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      <div className="flex flex-col items-center justify-center w-80 h-150 max-w-lg bg-white p-8 rounded-lg shadow-lg border-2 border-black">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Admin</h1>
        <button
          className="w-64 bg-blue-600 text-white py-3 mt-5 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={handleButtonClick}
        >
          Update JD
        </button>
        <button
          className="w-64 bg-blue-600 text-white py-3 mt-5 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={handleButtonClick}
        >
          Create JD
        </button>
        <button
          className="w-64 bg-blue-600 text-white py-3 mt-5 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={handleBulkUpdateClick} // Navigate to BulkUpdate
        >
          Bulk Update
        </button>
      </div>
    </div>
  );
}

export default UpdateJD;
