import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/Layout/MainLayout';
// import SubAccountCard from './components/SubaccountCard';
import SubAccountList from './pages/SubAccountList';
// import SubAccountInfo from './pages/SubAccountInfo';
import Transaction from './pages/transaction';
import FundRequest from './pages/fundRequest';
import Submit from './pages/submit';
import Overview from './components/overview/Overview';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/SIGNIN/LoginPage';


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

        <Route path="/sub-account-list" element={
          <MainLayout showDashboardSidebar={true} showTopbar={true}>
            <SubAccountList />
          </MainLayout>
        }
        />

        <Route path="/login" element={
          <LoginPage />
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

        <Route path="/services.jsx" element={<Services />} />
        {/* Add other routes here */}

        <Route path="/transaction-history" element={
          <MainLayout showDashboardSidebar={true} showTopbar={true}>
            <Transaction />
          </MainLayout>
        }
        />
        <Route path="/fund-request"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <FundRequest />
            </MainLayout>
          }
        />
        <Route path="/submit.jsx" element={<Submit />} />
        {/* Add other routes here */}
      </Routes>
    </Router>

  );
}

export default App;
