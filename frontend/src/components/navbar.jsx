// Navbar.js
import React from "react";
import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <header
        class="flex items-center justify-between p-4 bg-blue-500"
        data-id="2"
      >
        <div class="flex items-center gap-2 text-white" data-id="3">
          <img className='h-10 w-auto' src={logo} alt="" />

          <h1 class="text-xl font-bold" data-id="5">
            React Jobs
          </h1>
        </div>
        <nav class="flex gap-4" data-id="6">
          <a data-id="7" class="px-4 py-2 text-white bg-black rounded" href="/">
            Home
          </a>
          <a data-id="8" class="px-4 py-2 text-white" href="/jobs">
            Jobs
          </a>
          <Link data-id="9" class="px-4 py-2 text-white" to="/add-jobs">
            Add Job
          </Link>
        </nav>
      </header>
     
    </nav>
  );
};

export default Navbar;
