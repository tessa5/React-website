import { dom } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

import {Buttons} from './Buttons';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        
        <div className="bg-indigo-900 p-8 flex flex-col flex justify-center items-center">
            <section className='flex flex-col flex justify-center items-center text-center text-white text-xl mb-4'>
                <p className="mb-8 font-sans">
                    Join our newsletter for the best destinations in Kenya.
                </p>
                <div className="flex flex-col">
                    <form>
                        <input
                        className="mr-4 mb-8 text-lg p-2 rounded-md flex flex-col flex justify-center"
                        name="email"
                        type="email"
                        placeholder='Enter your Email'
                        />
                        <Buttons>Subscribe</Buttons>
                    </form>
                </div>
            </section>
            <section className="social">
                <div className='social-wrap'>
                    <div className="footer-logo">
                        <Link to='/' className='footer-logos'>
                        LVK<i className='fab fa-affiliatetheme'/>
                        </Link>
                    </div>
                    <small className='copyrights'> LVK © 2021 </small>
            <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
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
