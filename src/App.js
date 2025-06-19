import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import CustomerDashboard from './CustomerDashboard';
import SignUpPage from './SignUpPage'; // 🔁 import this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* 👈 new route */}
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
