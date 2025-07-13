'use client'
import DashboardHeader from "@/components/dashboardHeader";
import SideBar from "@/components/sideBar";
import { useEffect, useRef, useState } from "react";

// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
    const [showSideBar,setShowSideBar]=useState(false);
    const sideBarRef=useRef(null);

    useEffect(()=>{

        const clickOutSideSideBar=(event)=>{
            if (sideBarRef.current &&
            !sideBarRef.current.contains(event.target)) {
                setShowSideBar(false)
            }
            
        }

        if (showSideBar) {
            document.addEventListener('mousedown',clickOutSideSideBar)
        }else{
            document.removeEventListener('mousedown',clickOutSideSideBar)
        }
        ()=>{
            document.removeEventListener('mousedown',clickOutSideSideBar)
        }

    },[showSideBar])

  return (
    <div className="flex min-w-full h-screen bg-gradient-to-br from-[#051d48] to-[#005bde] ">
        <div className="md:block hidden">
             <SideBar/>
        </div>
        <div
        ref={sideBarRef} 
        className={`bg-[#f7f1eb] h-screen absolute z-10  ${showSideBar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
      {
        showSideBar && 
        <div>
          <SideBar />
        </div>
        
      }
      </div>
     
      <div className="w-full overflow-y-auto">
        <DashboardHeader setShowSideBar={setShowSideBar}/>
        {children}
      </div>
      
    </div>
  );
}
