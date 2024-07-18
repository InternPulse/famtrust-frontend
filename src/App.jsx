import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD:src/App.tsx
import './App.css';
import Transaction from './pages/transaction';
import FundRequest from './pages/fundRequest';
=======
import MainLayout from './components/Layout/MainLayout';
>>>>>>> ba74089d87652c359ace81480fc70e54108acb85:src/App.jsx

function App() {
  return (
    
    <Router>
<<<<<<< HEAD:src/App.tsx
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction.tsx" element={<Transaction />} />
        <Route path="/fundRequest.tsx" element={<FundRequest />} />
        {/* Add more routes here */}
      </Routes>
=======
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
>>>>>>> ba74089d87652c359ace81480fc70e54108acb85:src/App.jsx
    </Router>
  );
}

export default App;
