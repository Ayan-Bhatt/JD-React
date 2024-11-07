import React from 'react';

function BulkUpdate() {
  // Function to handle the CSV download
  const handleDownloadSample = () => {
    // Creating a sample CSV file content
    const sampleData = 'JD ID,Role,Description,Primary Skills,Secondary Skills\n';
    const blob = new Blob([sampleData], { type: 'csv' });
    const url = URL.createObjectURL(blob);

    // Creating a link element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sample_jd_upload_format.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle CSV file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      // Add further processing logic here if needed
    }
  };

  return (
    <div className="flex items-center justify-center h-full p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-black w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Bulk Update</h1>
        
        {/* Download Sample Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleDownloadSample}
            className="w-64 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Bulk-JD Format
          </button>
        </div>

        {/* File Upload for Bulk JD Update */}
        <div className="flex justify-center">
          <label className="w-64 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-center">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
            />
            Bulk JD Update
          </label>
        </div>
      </div>
    </div>
  );
}

export default BulkUpdate;
