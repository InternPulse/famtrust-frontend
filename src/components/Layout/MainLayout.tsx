import React from 'react';
import TopBar from '../Layout/TopBar';
import Sidebar from '../Layout/Sidebar';  
import Footer from '../Layout/Footer';

interface MainLayoutProps {
  activePage: string;
  showDashboardSidebar?: boolean;
  showTopbar?: boolean;
  children: React.ReactNode; 
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, showDashboardSidebar, showTopbar }) => {
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
