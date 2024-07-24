import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/Layout/MainLayout';
import TopBar from './components/TopBar';
import Transaction from './pages/transaction';
import FundRequest from './pages/fundRequest';
import Submit from './pages/submit';
import NewsLetter from './pages/newsLetter';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/transaction.jsx" element={<Transaction />} />
          <Route path="/fundRequest.jsx" element={<FundRequest />} />
          <Route path="/submit.jsx" element={<Submit />} />
          <Route path="/newsLetter.jsx" element={<NewsLetter />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
