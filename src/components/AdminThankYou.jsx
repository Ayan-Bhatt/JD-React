import React from 'react';

function AdminThankYou() {
  return (
    <div className="flex items-center justify-center min-h-[calc(77vh)] bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-96 text-center border-2 border-gray-300">
        <div className="flex justify-center mb-4">
          {/* Checkmark Icon */}
          <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
          Thank You!
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Your response has been successfully updated.
        </p>
        <button
          onClick={() => (window.location.href = '/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default AdminThankYou;
