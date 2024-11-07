import React from 'react';
import { useLocation } from 'react-router-dom';
import LTIMlogoBG from '../assets/LTIMlogoBG.png';

function Header() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/update-jd' || location.pathname === '/admin-description';

  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
      <div className="flex items-center">
        <img src={LTIMlogoBG} alt="Logo" className="h-12 w-34 ml-4" />
      </div>
      
      {isAdminPage && (
        <div className="flex items-center space-x-4 mr-10">
          <span>Admin</span>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            {/* Profile Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.71 0-7 1.794-7 4v2h14v-2c0-2.206-3.29-4-7-4z"/>
            </svg>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
