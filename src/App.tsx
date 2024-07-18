import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Transaction from './pages/transaction';
import FundRequest from './pages/fundRequest';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction.tsx" element={<Transaction />} />
        <Route path="/fundRequest.tsx" element={<FundRequest />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
