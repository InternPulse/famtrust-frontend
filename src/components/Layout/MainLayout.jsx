import React from 'react';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const MainLayout = ({ children, showDashboardSidebar, showTopbar }) => {
  return (
    <div className="flex flex-row">
      <div className='w-1/3 lg:w-1/4 flex-none'>
      {showDashboardSidebar && <Sidebar />}
      </div>
      <div className="flex-1 flex flex-col">
        <div className=''>
        {showTopbar && <TopBar />}
        </div>
        <main className=''>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
