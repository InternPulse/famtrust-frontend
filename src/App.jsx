import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/Layout/MainLayout';
import SignUpPage from './pages/SIGNUP/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <MainLayout showDashboardSidebar={true}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUpPage />}></Route>
          </Routes>
        </MainLayout>
      </Router>
    </BrowserRouter>
  );
}

export default App;
