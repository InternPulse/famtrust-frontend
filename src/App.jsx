import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/Layout/MainLayout';
// import SubAccountCard from './components/SubaccountCard';
import SubAccountList from './pages/SubAccountList';
import SubAccountInfo from './pages/SubAccountInfo';
import Transaction from './pages/transaction';
import FundRequest from './pages/fundRequest';
import Submit from './pages/submit';
import Overview from './components/overview/Overview';
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
        <Route path="/sub-account-list" element={
          <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <SubAccountList />
            </MainLayout>
        }
        />
        <Route
          path="/overview"
          element={ 
            <MainLayout showDashboardSidebar={true} showTopbar={true}>
              <Overview />
            </MainLayout>
          }
        />
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
