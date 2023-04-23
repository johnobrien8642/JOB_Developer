import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import statics from '../../util/statics.js';
import { Text, Box } from '@chakra-ui/react';

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

        <Box
          className='introContainer'
          mt='5%'
          rowGap='5%'
        >
          <Text as='h1'>Hi!</Text>
          <Text lineHeight='1.5rem' textAlign='center' maxWidth='90%' m='0 auto'>
            My name is John O'Brien and I'm a Full-Stack React Web Developer.
            I love creating amazing projects that look great and are efficient,
            maintainable, and scalable. I enjoy everything about the tech stack,
            from finding the perfect responsive CSS declarations all the way to optimizing
            database indexing. Let's build something amazing together!
          </Text>
          <Box
            className='siteLinks'
            m='1rem auto'
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
          </Box>
        </Box>
      </div>
      <Box maxWidth='90%' m='1rem auto'>
        <Text as='h2' fontSize='2rem' fontWeight='600'>A little more</Text>
        <p>
          Some programmers fall into one of two categorical camps, the frontend or the backend.
          I truly enjoy everything, from HTML, CSS (and the latest and greatest innovations there),
          to animations, all the way down to API creation and database architecture. My primary
          database expertise is with Mongodb, but I also have experience with SQL, and would look
          forward to working with it just as much for the right opportunity.
        </p>
      </Box>
      <svg className="aboutTriangle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,50 90,100 10,100" />
      </svg>
    </div>
  )
}

export default About;