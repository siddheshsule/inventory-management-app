'use client';

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {

const dispatch = useAppDispatch();
const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
}

const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} bg-white transition-all duration-300 ease-in-out overflow-hidden h-full shadow-md z-40`; 

  return (
    <div className={sidebarClassNames}>
      {/* Top Logo */}
      <div className={`flex ml-5 mr-5 gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed} ? "px-5" : "px-8"`}>
        <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} text-black font-extrabold text-5xl`}>stocky.</h1>
        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 items-center" onClick={toggleSidebar}>
          <Menu className="w-4 h-4"/>
        </button>
      </div>
      {/* Links */}
      <div className="flex-grow mt-8">{/* Links here */}</div>

      {/* Footer */}
      <div>
        <p className="text-center text-xs text-gray-400">&copy; {new Date().getFullYear()}, stocky. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;
