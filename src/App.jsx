import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <Home />
            </MainLayout>
          }
        />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
