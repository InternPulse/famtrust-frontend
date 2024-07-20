import React from 'react';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const MainLayout = ({ children, activePage, showDashboardSidebar, showTopbar }) => {
  return (
    <div className='flex'>
      <div className='flex w-2/5 lg:w-1/4'>
      {showTopbar && <TopBar />}
      {showDashboardSidebar && <Sidebar />}
      </div>
      <div className='flex flex-1 h-screen justify-center'>
      <main className='flex justify-center items-center'>
        {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
