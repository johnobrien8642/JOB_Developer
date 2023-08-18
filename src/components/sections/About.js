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
          <Text as='h1'>Hi</Text>
          <Text lineHeight='1.5rem' textAlign='center' maxWidth='90%' m='0 auto'>
            My name is John O'Brien, it's nice to meet you. Welcome to my little
            portfolio website. This is just a place for me to host a couple of links
            for stuff I've worked on, and work I've done. If you scroll down you can
            start checking them out, or you can click these links just below and it'll
            cleverly take you there autonomously!
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
          My passion for coding started a little over three years ago. I was looking
          for a career change and decided to give coding a try, just to see if I'd like it.
          Three years later and I'm happy to say that I've already come a long way in my coding
          journey, but I'm still looking forward to what the future holds.
        </p>
      </Box>
      <svg className="aboutTriangle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,50 90,100 10,100" />
      </svg>
    </div>
  )
}

export default About;