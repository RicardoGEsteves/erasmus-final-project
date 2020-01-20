import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../images/image1.webp';
import image2 from '../images/image2.webp';
import image3 from '../images/image3.webp';
import image4 from '../images/image4.webp';
import image5 from '../images/image5.webp';
import image6 from '../images/image6.webp';
import image7 from '../images/image7.webp';
import image8 from '../images/image8.webp';
import image9 from '../images/image9.webp';
import image10 from '../images/image10.webp';
import image11 from '../images/image11.webp';
import image12 from '../images/image12.webp';
import image13 from '../images/image13.webp';
import image14 from '../images/image14.webp';
import image15 from '../images/image15.webp';
import image16 from '../images/image16.webp';
import image17 from '../images/image17.webp';
import image18 from '../images/image18.webp';
import image19 from '../images/image19.webp';
import image20 from '../images/image20.webp';
import image21 from '../images/image21.webp';
import image22 from '../images/image22.webp';
import image23 from '../images/image23.webp';
import image24 from '../images/image24.webp';
import image25 from '../images/image25.webp';
import image26 from '../images/image26.webp';
import image27 from '../images/image27.webp';
import image28 from '../images/image28.webp';
import image29 from '../images/image29.webp';
import image30 from '../images/image30.webp';
import image31 from '../images/image31.webp';
import image32 from '../images/image32.webp';
import image33 from '../images/image33.webp';
import image34 from '../images/image34.webp';
import image35 from '../images/image35.webp';
import image36 from '../images/image36.webp';
import image37 from '../images/image37.webp';
import image38 from '../images/image38.webp';
import image39 from '../images/image39.webp';
import image40 from '../images/image40.webp';
import image41 from '../images/image41.webp';

function Experience() {
  const imagesX = [
    { name: 'image3', src: image3 },
    { name: 'image5', src: image5 },
    { name: 'image6', src: image6 },
    { name: 'image7', src: image7 },
    { name: 'image8', src: image8 },
    { name: 'image9', src: image9 },
    { name: 'image10', src: image10 },
    { name: 'image11', src: image11 },
    { name: 'image13', src: image13 },
    { name: 'image14', src: image14 },
    { name: 'image15', src: image15 },
    { name: 'image16', src: image16 },
    { name: 'image18', src: image18 },
    { name: 'image19', src: image19 },
    { name: 'image20', src: image20 },
    { name: 'image21', src: image21 },
    { name: 'image23', src: image23 },
    { name: 'image24', src: image24 },
    { name: 'image26', src: image26 },
    { name: 'image27', src: image27 },
    { name: 'image28', src: image28 },
    { name: 'image30', src: image30 },
    { name: 'image31', src: image31 },
    { name: 'image33', src: image33 },
    { name: 'image34', src: image34 },
    { name: 'image36', src: image36 },
    { name: 'image37', src: image37 },
    { name: 'image38', src: image38 },
    { name: 'image39', src: image39 },
    { name: 'image40', src: image40 },
    { name: 'image41', src: image41 }
  ];

  const imagesY = [
    { name: 'image1', src: image1 },
    { name: 'image2', src: image2 },
    { name: 'image4', src: image4 },
    { name: 'image12', src: image12 },
    { name: 'image17', src: image17 },
    { name: 'image22', src: image22 },
    { name: 'image25', src: image25 },
    { name: 'image29', src: image29 },
    { name: 'image32', src: image32 },
    { name: 'image35', src: image35 }
  ];

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false
  };

  return (
    <div className='experience-wrapper'>
      <div className='left-side'>
        <div className='sliderX'>
          <Slider {...settings}>
            {imagesX.map(img => (
              <div key={img.name}>
                <img src={img.src} alt='my photos' />
              </div>
            ))}
          </Slider>
        </div>

        <div className='sliderY'>
          <Slider {...settings}>
            {imagesY.map(img => (
              <div key={img.name}>
                <img src={img.src} alt='my photos' />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className='right-side'>
        <div className='text'>
          <p>
            This experience was awesome! <br /> <br />
            I've done my erasmus+ in Dublin, first of all because it´s a great
            city for the IT area and I knew it would be great for my resume and
            to experience the work ethic and culture in a working environment.{' '}
            <br />
            <br />
            But never thought it would be this great.
            <br />
            <br />
            My daily live there was:
            <br />
            During the week, work since 10AM to 4:30PM the lunch time was open
            for me to manage that but usually was at 12:30PM to 01:30PM/02:30
            always depending on the work that I've done in the morning and what
            I had left to do. I always had lunch with my colleges we had a group
            that always went to get lunch together. <br />
            After work usually I would get some pints with my colleges, the
            erasmus group, with some house mates or with the international
            group. <br />
            They have an awesome social culture so most of cases and for the
            rest of the people was about the same, it's almost a tradition to go
            for some pints after work.
            <br />
            Most of the days that pints just ended after 10PM/12PM and in some
            cases even later or sooner hahah. <br />
            <br />
            On the weekend was about the same but heavier, not always tho. was
            during the weekend that I had more time to get to know the city
            better, and do other trips for other towns in Ireland. <br />
            <br />
            I've rented a car there so i had my first experience driving in the
            other side, everything in on the opposite side so was tricky at
            first, but after some minutes it was already in autopilot mode.{' '}
            <br />
            <br />
            It was awesome, I had such a great moments, met such an awesome
            people world wide, it was realy, realy cool.
            <br />
            I totally recommend Dublin to every one! You will have the time of
            your life.
            <br />
            I've done a timeline / chronology of my erasmus experience so if you
            are curious about it and wanna have a lock, check my instagram.
            <br /> I have there almost every day during the all the erasmus
            time, you can check my stories, pictures and videos from everyday
            there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
