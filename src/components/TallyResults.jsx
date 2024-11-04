import React from 'react';

function TallyResults() {
  return (
    <div className="flex items-center justify-center h-full p-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg border-2 border-black flex space-x-8">
        
        {/* Differences Block */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Differences</h2>
          <textarea
            readOnly
            className="w-full h-80 p-4 border rounded-lg focus:outline-none bg-gray-100"
            placeholder="Differences will appear here..."
          />
        </div>

        {/* Similarities Block */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Similarities</h2>
          <textarea
            readOnly
            className="w-full h-80 p-4 border rounded-lg focus:outline-none bg-gray-100"
            placeholder="Similarities will appear here..."
          />
        </div>

      </div>
    </div>
  );
}

export default TallyResults;
