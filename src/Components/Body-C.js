import React from 'react';

import { Link } from 'react-router-dom';

function BodyLinks(props) {
    return(
        <>
        <li className="body-Container mb-4 flex flex-1 rounded-t-lg">
            <Link className="body-link" to={props.path}>
                <figure className="body-img-wrap w-full h-full" data-category={props.label}>
                    <img 
                        className="class-image w-3/5 h-3/5 rounded-lg transition duration-500 ease-in transform hover: -translate-y-1 hover:scale-110"
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