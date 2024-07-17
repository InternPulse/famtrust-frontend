import React from 'react';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const MainLayout = ({ children, activePage, showDashboardSidebar, showTopbar }) => {
  return (
    <div>
      {showTopbar && <TopBar />}
      {showDashboardSidebar && <Sidebar />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
