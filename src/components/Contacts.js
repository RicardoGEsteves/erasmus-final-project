import React, { useState } from 'react';

import hoverEffect from 'hover-effect';
import image1 from '../images/contacts1.webp';
import image2 from '../images/contacts2.webp';
import displacementImage from '../images/break-effect.webp';

function Contacts() {
  const [parent, setParent] = useState(null);

  new hoverEffect({
    parent,
    intensity: 0.3,
    image1,
    image2,
    imagesRatio: 0.5,
    displacementImage
  });
  return (
    <div className='contacts-wrapper'>
      <div className='hover' ref={el => setParent(el)}>
        <div className='links'>
          <div className='link'>
            <a
              href='https://www.linkedin.com/in/ricardogesteves'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </div>
          <div className='link'>
            <a
              href='https://github.com/RicardoGEsteves'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
