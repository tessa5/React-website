import React from 'react';

import { Link } from 'react-router-dom';

function BodyLinks(props) {
    return(
        <>
        <li className="body-Container mb-4 flex flex-1">
            <Link className="body-link flex flex-col " to={props.path}>
                <figure className="h-30 w-30 m-2 border-solid border-indigo-900 border-2 rounded-lg" data-category={props.label}>
                    <img 
                        className="w-96 h-56 rounded-lg object-cover bg-gray-300"
                        alt="magical Kenya"
                        src={props.src}
                    />
                </figure>
                <div className="h-12 w-96 ml-4 px-16 text-lg text-center bg-indigo-800 bg-opacity-25">
                    <h3 className="image-text font-light text-black text-xl leading-loose">{props.text}</h3>
                </div>
            </Link>

        </li>
        </>
    );
}

export default BodyLinks; 