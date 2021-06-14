import React from 'react';

import { Link } from 'react-router-dom';

const STYLES = ['btn-primary', 'btn-normal'];

const SIZES = ['btn-medium' , 'btn-large']

export const hButtons = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

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