import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/Layout/MainLayout';
import SubAccountCard from './components/SubaccountCard';
import SubAccountList from './pages/SubAccountList';
import SubAccountInfo from './pages/SubAccountInfo';

function App() {
  return (
    
    <Router>
      <MainLayout showDashboardSidebar={true}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub" element={<SubAccountInfo />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
