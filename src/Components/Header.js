import React from 'react';
import {Buttons} from './Buttons';


function Header() {
    return(
        <div className="headerContainer">
            <div className="relative h-auto w-screen">
            <img src= "/Images/IMage1.jpg" alt=''/> 
            
            <h1 className='heading text-4xl text-white font-bold absolute top-1/4 right-1/2 '>MY MAGICAL KENYA</h1>
            <h5>Discover More...</h5>
            <div className='btn-header'>
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