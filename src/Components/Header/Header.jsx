import { Link } from "react-router-dom";


const Header = () => {
const Nav = <>
<Link to="/home"className="text-gray-300 active:text-blue-500"> Home</Link>
<Link to="/home"className="text-gray-300 active:text-blue-500"> About</Link>
<Link to="/home"className="text-gray-300 active:text-blue-500"> feature</Link>
<Link to="/home"className="text-gray-300 active:text-blue-500"> service</Link>

</>

    return (
        <div className="navbar bg-base-100 my-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
       <h2 className="text-3xl font-bold text-orange-400">Sadekur <span className="text-white">Rahman</span></h2>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-5 ">
            {Nav}
             
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Header;