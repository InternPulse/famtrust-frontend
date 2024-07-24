import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import Overview from './components/overview/overview';
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
         <Route
            path="/overview"
            element={
              <div
                className="flex-col h-screen w-[100%] overflow-auto"
                style={{
                  backgroundColor:
                    'var(--Color-Style-Primary-Roles-Pri-container, #E2DDFF)',
                }}
              >
                <Overview />
              </div>
            }
          />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
