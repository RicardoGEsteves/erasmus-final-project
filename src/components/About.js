import React, { useState } from 'react';

import hoverEffect from 'hover-effect';
import image1 from '../images/me1.webp';
import image2 from '../images/me2.webp';
import displacementImage from '../images/smoke-effect.webp';

function About() {
  const [parent, setParent] = useState(null);

  new hoverEffect({
    parent,
    intensity: 0.3,
    image1,
    image2,
    imagesRatio: 0.7,
    displacementImage
  });
  return (
    <div className='about-wrapper'>
      <div className='intro'>
        <h1>About Me</h1>
        <p>
          Hi there, <br />
          I'm Ricardo Esteves, a software developer from Lisboa - Portugal.
        </p>
        <p>
          {' '}
          I'm a very pro-active person that loves every aspect of technology.
        </p>
        <p>
          Right now I'm focused on building and scratching new cutting edge
          software applications always in mind with the performance and user
          experience. <br />
          I've completed the HND Computer Science course at ETIC with success
          and because of that I've been able to take this experience.
        </p>
      </div>
      <div className='distortion' ref={el => setParent(el)}>
        <span className='overlay'></span>
      </div>
    </div>
  );
}

export default About;
