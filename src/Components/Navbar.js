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
            <div className="navbar-cont h-20 bg-indigo-900 text-white">
                <Link to="/" className="ml-8  p-4 text-3xl font-bold tracking-wider leading-tight float-left">LVK<i className='fab fa-affiliatetheme'/></Link> 
                <div className='menu-icons hidden text-3xl'onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-hamburger'}/>

            </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-list float-left p-4 pl-28 text-2xl font-bold'>
                        <Link to='/home' className='nav-link' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-list float-left p-4 pl-28 text-2xl font-bold'>
                        <Link to='/adventure' className='nav-link' onClick={closeMenu}>
                            Adventure
                        </Link>
                    </li>
                    <li className='nav-list float-left p-4 pl-28 text-2xl font-bold'>
                        <Link to='/explore' className='nav-link' onClick={closeMenu}>
                            Explore Kenya
                        </Link>
                    </li>
                </ul>
                    {button && <Buttons buttonStyle=''>Sign-Up</Buttons>} 
            </div>
        </nav>
        </>
    )
}

export default Navbar
