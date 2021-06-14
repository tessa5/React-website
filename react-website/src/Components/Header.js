import React from 'react';
import {Button} from './Button';

function Header() {
    return(
        <div className="headerContainer">
            <img src=''/>
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