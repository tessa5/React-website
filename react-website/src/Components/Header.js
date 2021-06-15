import React from 'react';
import {Button} from './Button';
import IMAGE1 from '../../public/Images'

function Header() {
    return(
        <div className="headerContainer">
            <div className="h-screen" style={{backgroundImage: `url(${IMAGE1})`}}></div>
            <h1 className='heading'>MY MAGICAL KENYA</h1>
            <h5>Discover More...</h5>
            <div className='btn-header'>
                <Button>
                    STARTS HERE
                </Button>
            </div>
        </div>
    );
    }

    export default Header;