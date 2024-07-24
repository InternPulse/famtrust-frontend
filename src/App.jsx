import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <MainLayout showDashboardSidebar={true} showTopbar={true}>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;