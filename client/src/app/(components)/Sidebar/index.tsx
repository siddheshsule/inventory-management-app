'use client';

import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex ml-5 gap-3 justify-between md:justify-normal items-center pt-8">
        <h1 className="text-black font-extrabold text-5xl">stocky.</h1>
        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 items-center" onClick={()=>{}}>
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
