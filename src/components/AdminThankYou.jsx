import React from 'react';

function AdminThankYou() {
  return (
    <div className="flex items-center justify-center h-100 pt-40"> {/* Added pt-16 for padding */}
      <div className="bg-gray-40 p-8 rounded-lg shadow-lg border-2 border-black w-80 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Thank you!</h1>
        <p className="text-gray-700 text-lg">Your response has been updated.</p>
      </div>
    </div>
  );
}

export default AdminThankYou;
