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
import SignUpPage from './pages/SIGNUP/SignUpPage';
import Recovery from './pages/SIGNIN/Recovery';


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
<<<<<<< HEAD
        <Route
          path="/overview"
          element={
            <div
              className="flex-col h-screen w-[100%] overflow-auto"
=======

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
        <Route path="signup" element={<SignUpPage/>} />
        <Route path="recovery" element={<Recovery/>} />
        
        


        <Route
          path="/overview"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
            <div
              className="flex-col h-screen  overflow-none"
>>>>>>> 9056392d477f4ef3882c08b802c72630a4b30404
              style={{
                backgroundColor:
                  'var(--Color-Style-Primary-Roles-Pri-container, #E2DDFF)',
              }}
            >
              <Overview />
            </div>
<<<<<<< HEAD
          }
        />
=======
            </MainLayout>
          }
        />

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
>>>>>>> 9056392d477f4ef3882c08b802c72630a4b30404
        {/* Add other routes here */}
      </Routes>
    </Router>

  );
}

export default App;
