import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/Layout/MainLayout';
import TopBar from './components/TopBar';
import Transaction from './pages/transaction';
import FundRequest from './pages/fundRequest';
import Submit from './pages/submit';
import NewsLetter from './pages/newsLetter';
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
          <Route path="/transaction.jsx" element={<Transaction />} />
          <Route path="/fundRequest.jsx" element={<FundRequest />} />
          <Route path="/submit.jsx" element={<Submit />} />
          <Route path="/newsLetter.jsx" element={<NewsLetter />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
