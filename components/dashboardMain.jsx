'use client'

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Home, Users, DollarSign, ShoppingBag, Folder, MessageSquare, Bell, Settings, Search, CheckCircle, Clock, ExternalLink, Activity, Zap, Layers, BarChart2 } from 'lucide-react'; // Added Activity, Zap, Layers, BarChart2 for project icons
import { FaRadio } from 'react-icons/fa6';
import Image from 'next/image';
import { FaBell, FaLongArrowAltRight } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from "react-icons/hi";

// Sample data for the sales overview chart
const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
    { name: 'Aug', sales: 2000 },
    { name: 'Sep', sales: 2780 },
    { name: 'Oct', sales: 1890 },
    { name: 'Nov', sales: 3000 },
    { name: 'Dec', sales: 4000 },
];

// Sample data for projects, updated with avatars and completion percentage
const projects = [
    { id: 1, icon: 'Xd', name: 'Chakra Soft UI Version', members: 4, memberAvatars: ['https://placehold.co/24x24/FFD700/FFFFFF?text=A', 'https://placehold.co/24x24/ADFF2F/FFFFFF?text=B', 'https://placehold.co/24x24/87CEEB/FFFFFF?text=C', 'https://placehold.co/24x24/FF6347/FFFFFF?text=D'], budget: '$14,000', completion: 60 },
    { id: 2, icon: 'A', name: 'Add Progress Track', members: 2, memberAvatars: ['https://placehold.co/24x24/9370DB/FFFFFF?text=E', 'https://placehold.co/24x24/FFDAB9/FFFFFF?text=F'], budget: '$3,000', completion: 10 },
    { id: 3, icon: 'Plus', name: 'Fix Platform Errors', members: 1, memberAvatars: ['https://placehold.co/24x24/B0C4DE/FFFFFF?text=G'], budget: 'Not set', completion: 100 },
    { id: 4, icon: 'Spotify', name: 'Launch our Mobile App', members: 6, memberAvatars: ['https://placehold.co/24x24/FFC0CB/FFFFFF?text=H', 'https://placehold.co/24x24/ADD8E6/FFFFFF?text=I', 'https://placehold.co/24x24/90EE90/FFFFFF?text=J', 'https://placehold.co/24x24/DDA0DD/FFFFFF?text=K', 'https://placehold.co/24x24/F08080/FFFFFF?text=L', 'https://placehold.co/24x24/FAFAD2/FFFFFF?text=M'], budget: '$32,000', completion: 100 },
    { id: 5, icon: 'A', name: 'Add the New Pricing Page', members: 3, memberAvatars: ['https://placehold.co/24x24/E6E6FA/FFFFFF?text=N', 'https://placehold.co/24x24/FFE4B5/FFFFFF?text=O', 'https://placehold.co/24x24/AFEEEE/FFFFFF?text=P'], budget: '$400', completion: 25 },
    { id: 6, icon: 'In', name: 'Redesign New Online Shop', members: 5, memberAvatars: ['https://placehold.co/24x24/D8BFD8/FFFFFF?text=Q', 'https://placehold.co/24x24/FFB6C1/FFFFFF?text=R', 'https://placehold.co/24x24/A9A9A9/FFFFFF?text=S', 'https://placehold.co/24x24/F5DEB3/FFFFFF?text=T', 'https://placehold.co/24x24/C0C0C0/FFFFFF?text=U'], budget: '$7,600', completion: 40 },
];

// Sample data for orders
const orders = [
    { id: 1, description: '$2400, Design changes', status: 'COMPLETION', date: '22 DEC 7:20 PM' },
    { id: 2, description: 'New order #4219423', status: 'NEW ORDER', date: '21 DEC 11:21 PM' },
    { id: 3, description: 'Server Payments for April', status: 'COMPLETION', date: '21 DEC 9:28 PM' },
    { id: 4, description: 'New card added for order #3210145', status: 'CREDIT CARD', date: '21 DEC 9:28 PM' },
    { id: 5, description: 'Unlock packages for Development', status: 'NEW ORDER', date: '18 DEC 4:45 PM' },
    { id: 6, description: 'New order #9851258', status: 'NEW ORDER', date: '18 DEC 4:45 PM' },
];

export default function DashboardMain() {
    const getProjectIcon = (iconType) => {
        switch (iconType) {
            case 'Xd':
                return <div className="bg-purple-600 text-white rounded-md p-1 text-xs font-bold w-6 h-6 flex items-center justify-center">Xd</div>;
            case 'A':
                return <Activity size={20} className="text-blue-500" />;
            case 'Plus':
                return <Zap size={20} className="text-green-500" />;
            case 'Spotify':
                return <div className="bg-green-500 text-white rounded-full p-1 text-xs font-bold w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-spotify"><path d="M8.3 19.2a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828L15.172 5.172a4 4 0 0 1 5.656 0 4 4 0 0 1 0 5.656L11.12 19.2a6 6 0 0 1-8.485 0 6 6 0 0 1 0-8.485L12.536 2.536Z" /></svg>
                </div>;
            case 'In':
                return <div className="bg-blue-700 text-white rounded-md p-1 text-xs font-bold w-6 h-6 flex items-center justify-center">in</div>;
            default:
                return <Folder size={20} className="text-gray-400" />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#051d48] to-[#005bde] text-white font-inter p-4 md:p-8">
            

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Card 1 */}
                <div className="bg-gradient-to-r from-[#060B26BD] from-75% to-[#1A1F3780]  p-6 rounded-xl shadow-lg flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-sm">Today's Money</p>
                        <h3 className="text-2xl font-bold text-white">$53,000 <span className="text-green-500 text-base">+55%</span></h3>
                    </div>
                    <div className="bg-blue-600 p-3 rounded-full">
                        <FaRadio size={24} />
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-gradient-to-r from-[#060B26BD] from-75% to-[#1A1F3780] p-6 rounded-xl shadow-lg flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-sm">Today's Users</p>
                        <h3 className="text-2xl font-bold text-white">2,300 <span className="text-green-500 text-base">+5%</span></h3>
                    </div>
                    <div className="bg-blue-600 p-3 rounded-full">
                        <Users size={24} />
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-gradient-to-r from-[#060B26BD] from-75% to-[#1A1F3780] p-6 rounded-xl shadow-lg flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-sm">New Clients</p>
                        <h3 className="text-2xl font-bold text-white">+3,052 <span className="text-red-500 text-base">-14%</span></h3>
                    </div>
                    <div className="bg-blue-600 p-3 rounded-full">
                        <MessageSquare size={24} />
                    </div>
                </div>
                {/* Card 4 */}
                <div className="bg-gradient-to-r from-[#060B26BD] from-75% to-[#1A1F3780]  p-6 rounded-xl shadow-lg flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-sm">Total Sales</p>
                        <h3 className="text-2xl font-bold text-white">$173,000 <span className="text-green-500 text-base">+8%</span></h3>
                    </div>
                    <div className="bg-blue-600 p-3 rounded-full">
                        <ShoppingBag size={24} />
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-[#050f30] via-[#061e85] to-[#000000] bg-transparent  rounded-xl shadow-lg flex flex-col md:flex-row items-center relative overflow-hidden">
                    <div className="relative z-10 text-center md:text-left mb-4 md:mb-0 p-8 ">
                        <span className='text-[14px] font-[400] text-[#A0AEC0]'>Welcome back,</span>
                        <h2 className="text-[28px] font-bold text-white mb-2"> Mark Johnson</h2>
                        <p className="text-gray-400 text-[16px] font-[400]">Glad to see you again!<br></br> Ask me anything.</p>

                        <div className='flex gap-2 mt-8 items-center'>

                            Tap to record <span><FaLongArrowAltRight /></span>
                        </div>
                    </div>

                    {/* Jellyfish image - positioned absolutely */}
                    <Image
                    width={400}
                    height={400}
                        src="/img/img2.png" // Placeholder image for jellyfish
                        alt="Jellyfish"
                        className="absolute right-0 bottom-0 opacity-50 md:opacity-100 w-full h-full object-center object-cover"
                    />
                </div>

                {/* Referral Tracking */}
                <div className="bg-gradient-to-r from-[#041233]/80 from-75% to-[#09183d]  p-6 rounded-xl shadow-lg flex flex-col items-center justify-between">
                    
                    <div className='flex justify-between w-full'>
                        <h3 className="text-xl font-semibold text-white mb-4">Referral Tracking</h3>
                        <span className='bg-[#1b2644] size-[30px] text-violet-500 flex justify-center items-center rounded-[20px]'><HiOutlineDotsHorizontal /></span>
                    </div>
                    <div className="flex items-center justify-between w-full mb-6">
                        <div className='flex flex-col space-y-4'>
                            <div className=" bg-gradient-to-r from-[#060C29]  to-[#040C3080] rounded-[20px] px-8 py-4">
                            <p className="text-gray-400 text-sm">Invited</p>
                            <p className="text-white text-lg font-bold">145 people</p>
                        </div>
                        <div className=" bg-gradient-to-r from-[#060C29]  to-[#040C3080] rounded-[20px] px-8 py-4">
                            <p className="text-gray-400 text-sm">Bonus</p>
                            <p className="text-white text-lg font-bold">1,465</p>
                        </div>
                        </div>
                        
                        <div className="relative w-34 h-34 flex items-center justify-center rounded-full bg-blue-900">
                            {/* This is a simplified representation of the circular progress */}
                            <div className="absolute inset-0 rounded-full border-8 border-[#05CD99] opacity-30"></div>
                            <div className="absolute inset-0 rounded-full border-8 border-[#05CD99] border-t-transparent animate-spin-slow"></div>
                            <span className='absolute top-4 text-gray-400 text-xs'>Safety</span>
                            <span className="text-white text-2xl font-bold">9.3</span>
                            <span className="absolute bottom-4 text-gray-400 text-xs">Total Score</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sales Overview Chart */}
            <div className="bg-gradient-to-br from-[#04245f] to-[#051434] p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Sales overview</h2>
                <p className="text-gray-400 mb-6">Sales performance in 2023</p>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={salesData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="name" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', borderRadius: '8px' }}
                                labelStyle={{ color: '#E5E7EB' }}
                                itemStyle={{ color: '#9CA3AF' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#6366F1"
                                activeDot={{ r: 8 }}
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Projects and Orders Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Projects Section */}
                <div className="bg-gradient-to-r from-[#060B26BD] from-75% to-[#1A1F3780]  p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-2 ">
                        Projects 
                    </h2>
                    <p className="text-gray-400 mb-6 flex items-center gap-1"><CheckCircle size={20} className="text-green-500 ml-2" /> 30 done this month</p>

                    {/* Projects Table Header */}
                    <div className="grid grid-cols-5 text-gray-500 text-xs uppercase font-semibold pb-3 border-b border-gray-700">
                        <div className="col-span-2">Companies</div>
                        <div>Members</div>
                        <div>Budget</div>
                        <div>Completion</div>
                    </div>

                    {/* Projects List */}
                    <div className="space-y-4 pt-4">
                        {projects.map((project) => (
                            <div key={project.id} className="grid grid-cols-5 items-center pb-4 border-b border-gray-800 last:border-b-0">
                                {/* Company Name and Icon */}
                                <div className="col-span-2 flex items-center space-x-3">
                                    {getProjectIcon(project.icon)}
                                    <p className="text-sm font-semibold text-white">{project.name}</p>
                                </div>

                                {/* Members Avatars */}
                                <div className="flex -space-x-2 overflow-hidden">
                                    {project.memberAvatars.map((avatar, index) => (
                                        <img
                                            key={index}
                                            className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-900"
                                            src={avatar}
                                            alt={`Member ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Budget */}
                                <div>
                                    <p className="text-sm text-white font-semibold">{project.budget}</p>
                                </div>

                                {/* Completion Progress Bar */}
                                <div>
                                    <p className="text-sm text-white mb-1">{project.completion}%</p>
                                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                                        <div
                                            className="bg-blue-500 h-1.5 rounded-full"
                                            style={{ width: `${project.completion}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Orders Overview Section */}
                <div className="bg-gradient-to-r from-[#060B26BD] from-75% to-[#1A1F3780]  p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-2">Orders overview</h2>
                    <p className="text-gray-400 mb-6 flex items-center gap-1"><CheckCircle size={20} className="text-green-500 ml-2" /> +30% this month</p>
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div key={order.id} className="flex items-start space-x-3 pb-4 border-b border-gray-800 last:border-b-0">
                                {order.status === 'COMPLETION' && <FaBell  size={20} className="text-green-500 mt-1" />}
                                {order.status === 'NEW ORDER' && <BarChart2 size={20} className="text-blue-500 mt-1" />} {/* Changed Package to BarChart2 */}
                                {order.status === 'CREDIT CARD' && <DollarSign size={20} className="text-yellow-500 mt-1" />}
                                <div>
                                    <p className="text-sm font-semibold text-white">{order.description}</p>
                                    <p className="text-xs text-gray-500 flex items-center">
                                        <Clock size={12} className="mr-1" />
                                        {order.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-gray-500 text-sm mt-8">
                <p>
                    <a href="#" className="hover:underline mx-2">Marketplace</a> |
                    <a href="#" className="hover:underline mx-2">Blog</a> |
                    <a href="#" className="hover:underline mx-2">License</a>
                </p>
            </footer>
        </div>
    );
}
