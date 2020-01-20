import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from './Animations';

import image1 from '../images/no-name-bar.webp';
import image2 from '../images/bernard-shaw.webp';
import image3 from '../images/wingwam.webp';
import image4 from '../images/workmans-club.webp';
import image5 from '../images/blackbird.webp';
import image6 from '../images/tramline.webp';
import image7 from '../images/grand-social.webp';

const images = [
  { name: 'Bar With no Name', image: image1 },
  { name: 'Bernard Shaw', image: image2 },
  { name: 'Wingwam', image: image3 },
  { name: `Workman's`, image: image4 },
  { name: 'Blackbird', image: image5 },
  { name: 'Tramline', image: image6 },
  { name: 'Grand Social', image: image7 }
];

const Hamburger = ({ state }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(reveal2, reveal1);

      gsap.to(menuLayer, { duration: 1, css: { display: 'none' } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menuLayer, { duration: 0, css: { display: 'block' } });

      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%'
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3, line4);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'
      />
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'
        />
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/about'
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/experience'
                    >
                      Daily Basis
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/work'
                    >
                      At Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line4 = el)}
                      to='/contacts'
                    >
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>Why Dublin?</h3>
                <p>
                  For software developers or anyone in the IT area I really
                  recommend Dublin, you have most of the big companies there and
                  because of that you get the opportunity to know lots of people
                  working in the same area as you and build a solid network. And
                  you have lots of pubs everywhere so you never bet bored and
                  its always some place new to discover, and lots of fun of
                  course.
                </p>
              </div>
              <div className='locations'>
                Best Pubs:
                {images.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
