import React from 'react';
import BodyLinks from './Body-C';



function body(){
    return(
        <>
        <div className='body-section'>
            <h1>Magical Destinations in KENYA</h1>
            <div className='body-container'>
                <div className='body-wrapper'>
                    <ul className='body-Container'>
                        <BodyLinks
                            src="../Images/img1.jpg"
                            text="here is some text-testing"
                            label="Adventure"
                            path="/explore"
                        />
                        <BodyLinks
                            src='../Images/img2.jpg'
                            text=""
                            label=""
                            path=""
                        />
                        <BodyLinks
                            src='../Images/img3.jpg'
                            alt=""
                            text=""
                            label=""
                            path=""
                        />
                    </ul>
                    <ul>
                        <BodyLinks
                            src='../Images/img4.jpg'
                            alt=""
                            text=""
                            label=""
                            path=""
                        />
                        <BodyLinks
                            src='../Images/img5.jpg'
                            alt=""
                            text=""
                            label=""
                            path=""
                        />
                        <BodyLinks
                            src='../Images/img6.png'
                            alt=""
                            text=""
                            label=""
                            path=""
                        />
                    </ul>
                    <ul>
                        <BodyLinks
                            src='../Images/img7.jpg'
                            alt=""
                            text=""
                            label=""
                            path=""
                        />
                        <BodyLinks
                            src='../Images/img8.jpg'
                            alt=""
                            text=""
                            label=""
                            path=""
                        />
                        <BodyLinks
                            src='../Images/img9.jpg'
                            text=""
                            label=""
                            path=""
                        />
                    </ul>
                    <ul>
                        <BodyLinks
                            src='../Images/img10.jpg'
                            text=""
                            label=""
                            path=""
                        />
                        <BodyLinks
                            src='../Images/IMage2.jpg'
                            text=""
                            label=""
                            path=""
                        />
                        <BodyLinks
                            src='../Images/IMage1.jpg'
                            text=""
                            label=""
                            path=""
                        />
                    </ul>
                </div>

            </div>
        </div>
        </>
    );
}

export default body;
