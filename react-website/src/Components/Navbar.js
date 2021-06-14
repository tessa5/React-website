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
                  
                  
              </ul>
              {button && <hButtons buttonStyle='btn-primary' >Sign-Up</hButtons>}
           </div>

        </nav>
        
        </>
    )
}

export default Navbar
