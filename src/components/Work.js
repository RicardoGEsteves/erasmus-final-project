import React from 'react';

import image from '../images/work.webp';

function Work() {
  return (
    <div className='work-wrapper'>
      <div className='img-wrapper'>
        <img src={image} alt='pic at work' />
        <span className='overlay' />
      </div>
      <div className='title'>
        <h1>At Work</h1>
      </div>
      <div className='text'>
        <p>
          I've done my internship at <b>Infinite Software</b> and it was a
          really good experience,
          <br />
          <br /> I've Learned a lot and worked with technologies that I never
          had used before what is great. In my area it's important to have
          experience with a lot of technologies, languages and frameworks, that
          provide me the opportunity to get more and better job offers.
          <br />
          <br />I was working at Infinite as a <b>Frontend Developer</b> and was
          integrated at one of the core teams of the company what was super
          challenging but at the same time really motivating. My main
          responsibilities was to maintaining and improving the existent code
          and develope new features from scratch.
          <br />
          <br />
          Some of the Technologies / Stack that i worked with:
          <br />
          <b>
            Javascript, Html, Css, Sass, Vue.js, VueX, Typescript, Rxjs,
            Electron, Jest and Enzyme, Azure DevOps
          </b>
        </p>
      </div>
    </div>
  );
}

export default Work;
