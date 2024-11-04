import React from 'react';
import Header from './Header';
import Footer from './Footer';

function AdminDescription() {
  return (
    <div className="flex flex-col min-h-screen">
      
      

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6 ">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg border-2 border-black">
          <h2 className="text-2xl font-semibold text-center mb-6">Job Description</h2>
          
          <form className="space-y-4">
            {/* JD Id */}
            <div>
              <label htmlFor="jdId" className="block text-gray-700 font-bold mb-2">JD Id</label>
              <input
                type="number"
                id="jdId"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter JD Id"
              />
            </div>

            {/* Job Description */}
            <div>
              <label htmlFor="jobDescription" className="block text-gray-700 font-bold mb-2">Job Description</label>
              <textarea
                id="jobDescription"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Job Description"
                rows="4"
              ></textarea>
            </div>

            {/* Primary Skills */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">Primary Skills</label>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Primary Skill ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Secondary Skills */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">Secondary Skills</label>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Secondary Skill ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Submit
            </button>
          </form>
        </div>
      </main>

      
    </div>
  );
}

export default AdminDescription;
