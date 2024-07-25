import React from 'react';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';

const MainLayout = ({ children, showDashboardSidebar, showTopbar }) => {
  return (
    <div className='flex h-screen'>
      {showDashboardSidebar && <div className='w-1/3 lg:w-1/4 flex-none'><Sidebar /></div>}
      <div className='flex flex-col flex-1'>
        {showTopbar && <div className='w-full'><TopBar /></div>}
        <main className='flex-1 p-6 overflow-auto flex justify-center items-center'>
          <div className='w-full'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
