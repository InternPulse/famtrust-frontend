import React from 'react';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const MainLayout = ({ children, activePage, showDashboardSidebar, showTopbar }) => {
  return (
    <div>
      {showTopbar && <TopBar />}
      <div className="flex ">

      {showDashboardSidebar && <Sidebar />}
      <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
