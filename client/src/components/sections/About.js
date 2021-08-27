import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import statics from '../../util/statics.js';

const scroller = Scroll.scroller;

const About = ({
}) => {

  return (
    <div
      className='aboutContainer'
    >
      <div
        className='pictureAndAboutContainer'
      >
        <div
          className='pictureAndBannerContainer'
        >
          <img
            className='mainPortfolioPic'
            alt='main portfolio pic'
            src={statics.mainProPic}
          />

          <div
            className='pictureBanner'
          >
            <span>UI/UX</span>
            <span>Frontend</span>
            <span>Backend</span>
          </div>
        </div>
        
        <div
          className='introContainer'
        >

          <h1>Hi there.</h1>
          <h2>
            My name is John O'Brien and I'm a Full-Stack Web Developer.
            Memorable, easy-to-use, and enjoyable UX/UI is my main focus. I view 
            all software languages as tools to achieve that end.
          </h2>

          <div
            className='siteLinks'
          >
            <span
              onClick={() => {
                scroller.scrollTo('projectsScrollEl', {
                  duration: 800,
                  smooth: 'easeInOutQuad'
                })
              }}
            >Projects</span>
            <img
              alt='squiggly'
              src="https://img.icons8.com/material-rounded/64/000000/wavy-line.png"
            />
            <Link
              to='/blog'
            >
              Blog
            </Link>
            <img 
              alt='squiggly'
              src="https://img.icons8.com/material-rounded/64/000000/wavy-line.png"
            />
            <span
              onClick={() => {
                scroller.scrollTo('linksScrollEl', {
                  duration: 800,
                  smooth: 'easeInOutQuad'
                })
              }}
            >Links</span>
            <img 
              alt='squiggly'
              src="https://img.icons8.com/material-rounded/64/000000/wavy-line.png"
            />
            <span
              onClick={() => {
                scroller.scrollTo('contactScrollEl', {
                  duration: 800,
                  smooth: 'easeInOutQuad'
                })
              }}
            >Contact</span>
          </div>
        </div>
      </div>
      <div
        className='myStoryContainer'
      >
        <h3>A little more</h3>
        <p>
          I learned how to program because I had my own ideas for projects 
          that I wanted to see built. What I enjoy the most is the final product,
          the actual experience of using the application. I believe writing fast, 
          efficient, and maintainable code is the best way to achieve that.
        </p>
      </div>
      <svg className="aboutTriangle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,50 90,100 10,100" />
      </svg>
    </div>
  )
}

export default About;