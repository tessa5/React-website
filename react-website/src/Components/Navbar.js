import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const[click, setClick] = useState(false);
    return (
        <>
        <nav className="navbar">
           <div className="navbar-cont">
              <Link to="/" className="nav-barLogo">Love K</Link> 
              <div className='menu-icons'>
                  <div className={click ? 'd' : 'd'}></div>

              </div>
           </div>

        </nav>
        
        </>
    )
}

export default Navbar
