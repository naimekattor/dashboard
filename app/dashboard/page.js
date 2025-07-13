import DashboardMain from '@/components/dashboardMain'
import SideBar from '@/components/sideBar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex min-w-full h-screen bg-gradient-to-br from-[#051d48] to-[#005bde]'>
      
      <div className='w-full overflow-y-auto'>
        <DashboardMain/>
      </div>
      
    </div>
  )
}

export default Dashboard
