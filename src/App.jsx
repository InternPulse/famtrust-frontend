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

import Header from './components/Header';
import SubAcctfamTrans from './pages/SubAccountFamilyTrans/SubAcctfamTrans';
// import SuBAcctCreation from './pages/SubAcctCreation/SuBAcctCreation';
import AdminDashboard from './pages/AdminDashboard';
import SubAcctDashboard from './pages/SubAcctDashboard';
import DashboardCard from './components/DashboardCard';
import FamilyAccessManagement from './pages/FamilyAccessMgt';
import AdminFamilyTransaction from './pages/AdminFamTransact';
import SubAcctTransaction from './pages/SubAcctFamTransact';
// import Created from './pages/SubAcctCreation/';
// import ModalCreateNewSub from './pages/SubAcctCreation';
// import SignUpForm from './pages/SubAcctCreation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <AdminDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/sub-account-dashboard"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <SubAcctDashboard />
            </MainLayout>
          }
        />

        <Route
          path="/sub-account-list"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <SubAccountList />
            </MainLayout>
          }
        />
        <Route
          path="/family-access-management"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <FamilyAccessManagement />
            </MainLayout>
          }
        />
        <Route
          path="/family-transaction-management"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <AdminFamilyTransaction />
            </MainLayout>
          }
        />

        <Route
          path="/sub-account-transaction"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <AdminFamilyTransaction />
            </MainLayout>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route
          path="/overview"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <div
                className="flex-col h-screen overflow-none"
                style={{
                  backgroundColor:
                    'var(--Color-Style-Primary-Roles-Pri-container, #E2DDFF)',
                }}
              >
                <Overview />
              </div>
            </MainLayout>
          }
        />
        {/* <Route path="/subacctfamiltrans" element={<SubAcctfamTrans />} />
        <Route path="/subacctcreation" element={<SuBAcctCreation />} /> */}

        {/* <Route path="/sign-upForm.jsx" element={<SignUpForm />} />
        <Route path="/ModalCreateNewSub.jsx" element={<ModalCreateNewSub />} />
        <Route path="/SuBAcctCreation.jsx" element={<SuBAcctCreation />} />
        <Route path="/created.jsx" element={<Created />} /> */}

        <Route
          path="/transaction-history"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <Transaction />
              {/* <div
                className="flex-col h-screen overflow-none"
                style={{
                  backgroundColor: 'var(--Color-Style-Primary-Roles-Pri-container, #E2DDFF)',
                }}
              >
                <Overview />
              </div> */}
            </MainLayout>
          }
        />
        <Route
          path="/fund-request"
          element={
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <FundRequest />
            </MainLayout>
          }
        />
        <Route path="/submit" element={<Submit />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
