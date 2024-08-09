import React from 'react';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';

const MainLayout = ({ children, showDashboardSidebar, showTopbar }) => {
  return (
    <div className='flex h-screen'>
      {showDashboardSidebar && <div className='w-1/6 md:w-1/6 lg:w-1/4 flex-none'><Sidebar /></div>}
      <div className='flex flex-col flex-1 w-5/6 lg:w-3/4'>
        {/* {showTopbar && <div className='w-3/4 right-0 top-0  fixed'><TopBar /></div>} */}
        {showTopbar && <div className='w-full'><TopBar /></div>}
        <main className='flex-1 p-6  flex justify-center items-center'>
          <div className='w-screen'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;