import React from 'react';

import { Link } from 'react-router-dom';

function BodyLinks(props) {
    return(
        <>
        <li className="body-Container">
            <Link className="body-link" to={props.path}>
                <figure className="body-img-wrap" data-category={props.label}>
                    <img 
                        className="class-image"
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