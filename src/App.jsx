import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import Overview from './components/overview/Overview';

function App() {
  return (
    <Router>
      <MainLayout showDashboardSidebar={true} showTopbar={true}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add this line */}
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
          <Route path="/home" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
