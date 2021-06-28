import React from 'react';

import { Link } from 'react-router-dom';

const STYLES = ['border-2 rounded-md mt-4 ml-8 py-1 px-6 ', 'border-3 rounded-full py-3 px-6'];

const SIZES = ['p-6 transition delay-150 duration-300 ease-in-out text-xl font-normal'  , 'p-8 transition delay-150 duration-300 ease-in-out text-xl font-semibold']

export const Buttons = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/.sign-up' className='nav-mobile p-8 '>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>

           
        </Link>
    )
};