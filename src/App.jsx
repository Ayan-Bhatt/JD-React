import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './Routes';


function App() {
  return (
    <Router>
      <div className="flex flex-col w-screen h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes /> {/* This component will handle all route-based content */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
