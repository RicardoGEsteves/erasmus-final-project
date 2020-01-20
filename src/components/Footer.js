import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className='copyright'>
        <p>Copyright &copy; 2020 Ricardo Esteves, All rights reserved</p>
      </div>
      <div className='links'>
        <a
          href='https://www.linkedin.com/in/ricardogesteves'
          target='_blank'
          rel='noopener noreferrer'
          className='link'
        >
          <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
        </a>
        <a
          href='https://github.com/RicardoGEsteves'
          target='_blank'
          rel='noopener noreferrer'
          className='link'
        >
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
        <a
          href='https://www.instagram.com/its.me.esteves'
          target='_blank'
          rel='noopener noreferrer'
          className='link'
        >
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
