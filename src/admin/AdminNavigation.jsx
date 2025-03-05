import React, { useEffect, useState } from 'react'
import { FaRegDotCircle } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';

const AdminNavigation = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location =useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false); // Close the menu on route change
  }, [location]); // Dependency array ensures this runs when the route changes


  return (
    <> 
     
      <div className={`off-canvas ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-header">
            <div className="logo"><FaRegDotCircle /></div>
            <span className={`close ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isMenuOpen ? 'X' : '☰'} {/* Hamburger or Close icon */}
            </span>
            
        </div>
        <h3>Pages </h3>

        <ul>
            <li> <Link to="/" className='navlink'><FaCircleNotch className='navicon'/> Dashboard</Link></li>
            <li> <Link to="/ecommerce" className='navlink'><LuShare2 className='navicon'/> Ecommerce </Link></li>
            
        </ul>
      </div>
    </>
  )
}

export default AdminNavigation