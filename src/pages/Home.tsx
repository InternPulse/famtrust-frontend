import React from 'react';
import MainLayout from '../components/Layout/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout activePage="home" showDashboardSidebar showTopbar>
      <p className='text-6xl'>Home Page</p>
    </MainLayout>
  );
};

export default Home;

