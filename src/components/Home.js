import React from 'react';

import homeImg from '../images/home.webp';

function Home() {
  return (
    <div className='home-wrapper'>
      <div className='text-wrapper'>
        <h1>Erasmus+ Final Project</h1>
        <h5>
          The <b>Erasmus+ </b> program and <b>ETIC </b>
          gave me the opportunity to live and work abroad for three months, in
          my case I went to Dublin and it was a blast.
          <br />
          Like they say: it was "Grand" or a "Craic". <br />
          This is my final project about all that experience.
        </h5>
        <p>
          A special thanks to <b>Erasmus+</b> program, <b>ETIC</b> and{' '}
          <b>Interns Plus</b> that made this opportunity possible.
        </p>
      </div>
      <div className='image-wrapper'>
        <img src={homeImg} alt='background dublin text' />
      </div>
    </div>
  );
}

export default Home;
