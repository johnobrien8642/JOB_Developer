import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import statics from '../../util/statics.js';

const scroller = Scroll.scroller;

const About = ({
  drawAboutTriangleLeft
}) => {

  useEffect(() => {
    drawAboutTriangleLeft();
  })


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
          <h1>Hi, I'm John O'Brien.</h1>
          <h2>I build beautiful, responsive web applications. Let's build something together.</h2>

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
        <h3>My story</h3>
        <p>
          I'm a self-taught web developer who started their programming journey
          at the beginning of 2020. My goal is to master the 
          development process, delivering beautiful, enjoyable UX/UI while also 
          engineering fast, efficient and powerful solutions on the backend. I'm 
          a lifelong problem solver who gets immense satisfaction breaking down 
          complex problems.
        </p>
      </div>
    </div>
  )
}

export default About;