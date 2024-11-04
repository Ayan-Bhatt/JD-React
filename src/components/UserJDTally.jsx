import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserJDTally() {
  const [selectedRole, setSelectedRole] = useState('');
  const [jdInput, setJdInput] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle dropdown change
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  // Function to handle JD input change
  const handleJdInputChange = (e) => {
    setJdInput(e.target.value);
  };

  // Function to handle the "Proceed" button click
  const handleProceed = () => {
    console.log('Proceed with:', selectedRole, jdInput);
    navigate('/tally-results'); // Navigate to TallyResults page
  };

  return (
    <div className="flex items-center justify-center h-full p-6">
      <div className="flex flex-col items-center justify-center w-full max-w-lg bg-white p-8 rounded-lg shadow-lg border-2 border-black">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">User JD Tally</h1>
        
        {/* Dropdown for Roles */}
        <div className="w-full mb-4">
          <label htmlFor="roles" className="block text-gray-700 font-bold mb-2 text-left">Roles</label>
          <select
            id="roles"
            value={selectedRole}
            onChange={handleRoleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select a role</option>
            <option value="Java Developer">Java Developer</option>
            <option value="Python Dev">Python Dev</option>
            <option value="Node Js">Node Js</option>
            <option value="React">React</option>
            <option value="DevOps">DevOps</option>
          </select>
        </div>

        {/* Text area for JD Tallying */}
        <div className="w-full mb-4">
          <label htmlFor="jdTally" className="block text-gray-700 font-bold mb-2 text-left">Choose JD for Tallying</label>
          <textarea
            id="jdTally"
            value={jdInput}
            onChange={handleJdInputChange}
            className="w-full h-38 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter JD for Tallying"
          />
        </div>

        {/* Proceed Button */}
        <button
          type="button"
          onClick={handleProceed} // Call the handleProceed function on click
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default UserJDTally;
