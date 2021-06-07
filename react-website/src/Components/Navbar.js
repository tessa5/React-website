import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
        <nav className="navbar">
           <div className="navbar-cont">
              <Link to="/" className="nav-barLogo">LVK<i className='fab fa-affiliatetheme'/></Link> 
              <div className='menu-icons'>
                  <i className={click ? 'fas fa-bars' : 'fas fa-hamburger'}/>

              </div>
           </div>

        </nav>
        
        </>
    )
}

export default Navbar
