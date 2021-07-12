import React from 'react';

import { Link } from 'react-router-dom';

function BodyLinks(props) {
    return(
        <>
        <li className="body-Container mb-4 flex flex-1 rounded-t-lg">
            <Link className="body-link flex flex-col " to={props.path}>
                <figure className="h-30 w-30 m-4 border-solid border-black border-2 rounded-lg" data-category={props.label}>
                    <img 
                        className="w-48 h-48 rounded-lg object-cover bg-gray-300 "
                        alt="magical Kenya"
                        src={props.src}
                    />
                </figure>
                <div className="image-info">
                    <h3 className="image-text">{props.text}</h3>
                </div>
            </Link>

        </li>
        </>
    );
}

export default BodyLinks; 