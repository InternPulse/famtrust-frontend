//Scroll down to see my custom Made homePage
//click the button to navigate to both pages and everything works on the page

// import React from 'react';
// import MainLayout from '../components/Layout/MainLayout';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <MainLayout activePage="home" showDashboardSidebar showTopbar>
//       <div className="p-4 w-10/12 m-auto relative left-14">
//         <h1 className="text-2xl font-bold text-red-500">Home Page</h1>
//         <p>Welcome to the Home Page!</p>

//         <button></button>
//       </div>
//     </MainLayout>
//   );
// };

// export default Home;

// import React from 'react';

//Tunchi Made this

import MainLayout from '../components/Layout/MainLayout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <MainLayout activePage="home" showDashboardSidebar showTopbar>
      <div className="w-10/12 relative m-auto pl-10 pt-10 text-center">
        <p className="text-6xl font-bold">Home Page</p>
        <div className="mt-10">
          <button className="bg-blue-300  rounded-lg p-2 hover:bg-black hover:text-white hover:scale-100">
            <Link to="/transaction.jsx">go to Transaction</Link>
          </button>
          <button className="bg-blue-300 rounded-lg m-4 p-2 hover:bg-black hover:text-white hover:scale-100">
            <Link to="/fundRequest.jsx">go to Fund Request</Link>
          </button>
          <br />
          <button className="bg-blue-300 rounded-lg p-2  hover:bg-black hover:text-white hover:scale-100">
            <Link to="/newsLetter.jsx">Newsletter</Link>
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
