import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
<<<<<<< HEAD:src/pages/Home.tsx
    <MainLayout  activePage="home" showDashboardSidebar showTopbar>
      <div className='w-10/12 relative m-auto pl-10 pt-10'><p className='text-6xl'>Home Page</p>
      <div className='mt-10'>
        <button className='bg-blue-300 mr-4 rounded-lg p-2 hover:bg-black hover:text-white hover:scale-100'>
          <Link to="/transaction.tsx">go to Transaction</Link>
        </button>
        <button className='bg-blue-300 rounded-lg p-2 hover:bg-black hover:text-white hover:scale-100'>
          <Link to="/fundRequest.tsx">go to Fund Request</Link>
        </button>
      </div>
      
      </div>
      
      
=======
    <MainLayout activePage="home" showDashboardSidebar showTopbar>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-500">Home Page</h1>
        <p>Welcome to the Home Page!</p>
      </div>
>>>>>>> ba74089d87652c359ace81480fc70e54108acb85:src/pages/Home.jsx
    </MainLayout>
  );
};

export default Home;
