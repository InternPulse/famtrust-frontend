 import MainLayout from '../components/Layout/MainLayout'
import Dashboard from '../components/Dashboard'

const SubAccounts = () => {
  return (
    <MainLayout activePage="sub-account " showDashboardSidebar showTopbar>
    <div className=" w-[78vw] h-[88vh]  ">
   
   
<Dashboard/>


    </div>
  </MainLayout>
  )
}

export default SubAccounts