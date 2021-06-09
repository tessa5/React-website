import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false)
    return (
        <>
        <nav className="navbar">
           <div className="navbar-cont">
              <Link to="/" className="nav-barLogo">LVK<i className='fab fa-affiliatetheme'/></Link> 
              <div className='menu-icons'onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-hamburger'}/>

              </div>
              <ul className={click ? 'nav-menu active' : 'nav-manu'}>
                  <li className='nav-list'>
                      <Link to='/' className='nav-link' onClick={closeMenu}>
                          Home
                      </Link>
                  </li>
                  <li className='nav-list'>
                      <Link to='/' className='nav-link' onClick={closeMenu}>
                         Adventure
                      </Link>
                  </li>
                  <li className='nav-list'>
                      <Link to='/' className='nav-link' onClick={closeMenu}>
                          Explore Kenya
                      </Link>
                  </li>
                  <li className='nav-list'>
                      <Link to='/' className='nav-mobile' onClick={closeMenu}>
                          Sign Up
                      </Link>
                  </li>
              </ul>
           </div>

        </nav>
        
        </>
    )
}

export default Navbar
