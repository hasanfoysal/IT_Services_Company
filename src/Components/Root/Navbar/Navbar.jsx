import {  Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const nav = <>
   <NavLink to='/'><li className="text-l hover:text-orange-500 lg:text-white"><a>Home</a></li></NavLink>
   <NavLink to='/service'><li  className="text-l hover:text-orange-500 lg:text-white"><a>Service</a></li></NavLink>
   <NavLink to='/ceo'><li  className="text-l hover:text-orange-500 lg:text-white"><a>CEO</a></li></NavLink>
   <NavLink to='/why'><li  className="text-l hover:text-orange-500 lg:text-white"><a>Why LM Group</a></li></NavLink>
   <NavLink to='/team'><li  className="text-l hover:text-orange-500 lg:text-white"><a>Team Members</a></li></NavLink>
   <NavLink to='/contact'><li  className="text-l hover:text-orange-500 lg:text-white"><a>Contact Us</a></li></NavLink>
  </>
 
    return (
        <div>
            <div className="navbar  bg-black opacity-90 text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {nav}
      </ul>
    </div>
    <h1 className="btn btn-ghost lg:text-3xl text-2xl  text-white lg:ml-44 md:ml-32 font-bold">LM Group <span className="text-4xl text-orange-500 font-extrabold">.</span></h1>
  </div>
  
  <div className="navbar-end lg:mr-44 md:mr-32">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nav}
    </ul>
  </div>
  </div>
</div>

        </div>
    );
};

export default Navbar;