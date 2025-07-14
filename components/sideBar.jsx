'use client'
import React from 'react'
import { FaHome, FaRegCreditCard, FaRocket } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { FaNoteSticky, FaScrewdriverWrench } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const SideBar = () => {
    const path=usePathname();
        console.log(path);
    return (
        <div className='bg-gradient-to-br from-[#060b27] from-94% to-[#1A1F3700]  text-white h-screen w-[264px] pl-6 p-6 flex justify-between flex-col'>
            <div>
                 <h1 className='bg-gradient-to-r from-[#FFFFFF] to-[#757A8C00] text-[14px] font-[400] bg-clip-text bg-transparent pb-4 text-center'>VISION UI FREE</h1>
            <div
                className="w-full h-[2px] bg-gradient-to-r from-black via-[#E0E1E2] to-black"
            ></div>
            <ul className='flex flex-col space-y-2 py-4 '>
                <Link href={'/dashboard'} className={`${path==="/dashboard"?'active ':""}flex gap-2 items-center bg-[#1a1f37] rounded-2xl p-2 cursor-pointer text-[14px] font-[400]`}><span className='p-1 bg-[#0075FF] rounded-[20px]'><FaHome className=' w-[15px] h-[15px] text-white  flex items-center justify-center' /></span>Dashboard</Link>
                <Link href={'/dashboard/tables'} className={`${path==="/dashboard/tables"?'active ':""}flex gap-2 items-center hover:bg-[#1a1f37] rounded-2xl p-2 cursor-pointer text-[14px] font-[400]`}><span className='p-1 bg-[#0075FF] rounded-[20px]'><MdBarChart className=' w-[15px] h-[15px] text-white  flex items-center justify-center' /></span>Tables</Link>
                <Link href={'/dashboard/billing'} className={`${path==="/dashboard/billing"?'active ':""}flex gap-2 items-center hover:bg-[#1a1f37] rounded-2xl p-2 cursor-pointer text-[14px] font-[400]`}><span className='p-1 bg-[#0075FF] rounded-[20px]'><FaRegCreditCard className=' w-[15px] h-[15px] text-white  flex items-center justify-center' /></span>Billing</Link>
                <li className='flex gap-2 items-center hover:bg-[#1a1f37] rounded-2xl p-2 cursor-pointer text-[14px] font-[400]'><span className='p-1 bg-[#0075FF] rounded-[20px]'><FaScrewdriverWrench className=' w-[15px] h-[15px] text-white  flex items-center justify-center' /></span>RTL</li>
            </ul>
            <ul className='flex flex-col space-y-2'>
                <span>ACCOUNT PAGES</span>
                <li className='flex gap-2 items-center hover:bg-[#1a1f37] rounded-2xl p-2 cursor-pointer text-[14px] font-[400]'><span className='p-1 bg-[#0075FF] rounded-[20px]'><FaHome className=' w-[15px] h-[15px] text-white  flex items-center justify-center' /></span>Profile</li>
                <li className='flex gap-2 items-center hover:bg-[#1a1f37] rounded-2xl p-2 cursor-pointer text-[14px] font-[400]'><span className='p-1 bg-[#0075FF] rounded-[20px]'><FaNoteSticky className=' w-[15px] h-[15px] text-white  flex items-center justify-center' /></span>Sign In</li>
                <li className='flex gap-2 items-center hover:bg-[#1a1f37] rounded-2xl p-2 cursor-pointer text-[14px] font-[400]'><span className='p-1 bg-[#0075FF] rounded-[20px]'><FaRocket className=' w-[15px] h-[15px] text-white  flex items-center justify-center' /></span>Sign Up</li>
            </ul>

            </div>
           
            <div className='relative'>
                <Image width={218} height={169} src={'/img/img-dash.jpg'} alt="img-dashboard"  className='w-[218px] h-[169px] rounded-[20px]'/>
                <div className=' absolute bottom-4 px-4'>
                    <img src="/img/icon1.png" alt="what Icon"  />
                    <h2 className='text-[14px] font-[700]'>Need help?</h2>
                    <p className='text-[12px] font-[400] tracking-wider mb-2'>Please check our docs</p>
                    <button className='py-2 text-[10px] font-[700] px-6 bg-gradient-to-r from-75% from-[#060B28BD] to-70% to-[#0A0E23B5] rounded-[20px]'>DOCUMENTATION</button>
                </div>
            </div>
        </div>
    )
}

export default SideBar
