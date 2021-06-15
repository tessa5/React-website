import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {hButtons} from './hButtons';

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton)
    return (
        <>
        <nav className="navbar ">
           <div className="navbar-cont bg-gradient-to-r from-yellow-400 via-red-500 to-pink-50 text-black">
              <Link to="/" className="nav-barLogo  p-4 text-3xl font-bold tracking-wider leading-tight float-left">LVK<i className='fab fa-affiliatetheme'/></Link> 
              <div className='menu-icons float-right'onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-hamburger'}/>

              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-list float-left p-4 text-xl font-light'>
                      <Link to='/' className='nav-link' onClick={closeMenu}>
                          Home
                      </Link>
                  </li>
                  <li className='nav-list float-left p-4 text-xl font-light'>
                      <Link to='/' className='nav-link' onClick={closeMenu}>
                         Adventure
                      </Link>
                  </li>
                  <li className='nav-list float-left p-4 text-xl font-light'>
                      <Link to='/' className='nav-link' onClick={closeMenu}>
                          Explore Kenya
                      </Link>
                  </li>
                  
                  
              </ul>
              {button && <hButtons buttonStyle='btn-primary' >Sign-Up</hButtons>}
           </div>

        </nav>
        
        </>
    )
}

export default Navbar
