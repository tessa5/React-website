import React from 'react';
import {Buttons} from './Buttons';


function Header() {
    return(
        <div className="headerContainer">
            <div className="Header relative h-auto w-auto">
            <img src= "/Images/IMage1.jpg" alt=''/> 
            
            <h1 className='header-text text-6xl text-center text-white font-bold inset-x-1/4 top-28 relative md:absolute'>MY MAGICAL KENYA</h1>
            <h5 className="mt-14 text-4xl text-center text-white inset-x-1/4 top-36 relative md:absolute">Discover More...</h5>
            <div className='btn-header mt-4 inset-x-1/4 top-72 relative md:absolute text-white font-bold p-4'>
                <Buttons>
                    STARTS HERE
                </Buttons>
                <Buttons>
                    SHORT VIDEO <i className='far fa-play-circle'/>
                </Buttons>
            </div>
        </div>
        </div>
    );
    }

    export default Header;