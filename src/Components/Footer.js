import { dom } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

import {Buttons} from './Buttons';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        
        <div className="bg-indigo-900 p-8 ">
            <section className='flex flex-col flex justify-center items-center text-center text-white text-xl mb-4'>
                <p className="mb-8 font-sans">
                    Join our newsletter for the best destinations in Kenya.
                </p>
                <div className="flex flex-col justify-center">
                    <form>
                        <input
                        className=" footer-input mr-4 mb-6 text-lg p-2 rounded-md flex flex-col "
                        name="email"
                        type="email"
                        placeholder='Enter your Email'
                        />
                        <Buttons>Subscribe</Buttons>
                    </form>
                </div>
            </section>
            <section className="social">
                <div className='social-wrap flex justify-center flex space-x-3 '>
                    <div className="footer-logo text-white text-3xl font-bold tracking-wider leading-tight flex-1 pl-8">
                        <Link to='/' className='footer-logos'>
                        LVK<i className='fab fa-affiliatetheme'/>
                        </Link>
                    </div>
                    <small className='copyrights text-white flex-1 font-bold'> LVK © 2021 </small>
            <div class='social-icons min-w-auto md:min-w-0 text-2xl text-white flex justify-between pr-8'>
            <Link
                class='social-icon-link facebook flex justify-between pr-2 pl-6'
                to='/'
                target='_blank'
                aria-label='Facebook'
            >
                <i class='fab fa-facebook' />
            </Link>
            <Link
                class='social-icon-link instagram flex justify-between pl-2 pr-2 '
                to='/'
                target='_blank'
                aria-label='Instagram'
            >
                <i class='fab fa-instagram' />
            </Link>
            <Link
                class='social-icon-link youtube  flex justify-between pl-2 pr-2'
                to='/'
                target='_blank'
                aria-label='Youtube'
            >
                <i class='fab fa-youtube' />
            </Link>
            <Link
                class='social-icon-link twitter  flex justify-between pr-2 pl-2'
                to='/'
                target='_blank'
                aria-label='Twitter'
            >
                <i class='fab fa-twitter' />
            </Link>
            <Link
                class='social-icon-link LinkedIn flex justify-between pr-2 pl-2'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
            >
                <i class='fab fa-linkedin' />
            </Link>
            </div>
        </div>
      </section>
    </div>
         
    );
}

export default Footer;
