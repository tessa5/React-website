import React from 'react';
import BodyLinks from './Body-C';



function body(){
    return(
        <>
        <div className='body-section p-1 bg-white'>
            <h1 className='m-4 text-4xl text-center'>Magical Destinations in KENYA</h1>
            <div className='body-container flex flex-col m-auto'>
                <div className='body-wrapper'>
                    <ul className='body-items flex flex-row'>
                        <BodyLinks
                            src="../Images/img1.jpg"
                            text="some of Kenya's Exotic Safaris"
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
                    <ul className="body-items flex flex-row">
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
                    <ul className="body-items flex flex-row">
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
                    <ul className="body-items flex flex-row">
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
