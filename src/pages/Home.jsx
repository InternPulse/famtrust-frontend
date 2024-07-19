import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <MainLayout activePage="home" showDashboardSidebar showTopbar>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-500">Home Page</h1>
        <p>Welcome to the Home Page!!</p>
      </div>
    </MainLayout>
  );
};

export default Home;
