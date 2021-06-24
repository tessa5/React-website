import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Buttons} from './Buttons';

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
        <nav className="navbar sticky top-0 z-50">
            <div className="navbar-cont h-20 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-50 text-black">
                <Link to="/" className="nav-barLogo  p-4 text-3xl font-bold tracking-wider leading-tight float-left">LVK<i className='fab fa-affiliatetheme'/></Link> 
                <div className='menu-icons float-right text-3xl p-3'onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-hamburger'}/>

            </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-list float-left p-4 pl-28 text-2xl font-light'>
                        <Link to='/home' className='nav-link' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-list float-left p-4 pl-28 text-2xl font-light'>
                        <Link to='/adventure' className='nav-link' onClick={closeMenu}>
                            Adventure
                        </Link>
                    </li>
                    <li className='nav-list float-left p-4 pl-28 text-2xl font-light'>
                        <Link to='/explore' className='nav-link' onClick={closeMenu}>
                            Explore Kenya
                        </Link>
                    </li>
                    <li className='nav-list float-left p-4 pr-24 pl-28 text-2xl font-light'>
                        <Link to='/sign-up' className='nav-link' onClick={closeMenu}>
                            Sign-Up
                        </Link>
                    </li>
                </ul>
                    {button && <Buttons buttonStyle='' >Sign-Up</Buttons>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
