import { Bell, Search, Settings } from 'lucide-react'
import React from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'

const DashboardHeader = ({setShowSideBar}) => {
  return (
    <div>
      {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-center p-4 px-8 ">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-xl font-semibold text-gray-400 ">Pajas / <span className="text-white">Dashboard</span></h1>
                </div>
                <div className="flex items-center justify-between md:space-x-4 space-x-8">
                    <div className='md:hidden block'>
                        <FaBarsStaggered className="text-gray-400 hover:text-white cursor-pointer" size={20} onClick={()=>setShowSideBar(prev=>!prev)}/>
                    </div>
                    <div className="relative md:block hidden">
                        <input
                            type="text"
                            placeholder="Type here..."
                            className="bg-gray-800 text-white placeholder-gray-500 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    <Search className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                    <Bell className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                    <Settings className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://placehold.co/32x32/000000/FFFFFF?text=MJ" // Placeholder for user avatar
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="text-gray-400">Mark Johnson</span>
                    </div>
                </div>
            </header>
    </div>
  )
}

export default DashboardHeader
