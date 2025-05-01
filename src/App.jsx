import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VendorDashboard from './pages/VendorDashboard.jsx';
import TransporterDashboard from './pages/TransporterDashboard.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/vendor"
            element={
              <>
                <Navbar />
                <VendorDashboard />
              </>
            }
          />
          <Route
            path="/transporter"
            element={
              <>
                <Navbar />
                <TransporterDashboard />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
