import React from 'react';
import Scroll from 'react-scroll';
import statics from '../../util/statics.js';

const Element = Scroll.Element;
<Element name='projectsScrollEl' />

const Projects = () => {

  return (
    <section
      className='projectsContainer'
      >
      <Element name='projectsScrollEl' />
      <h1>Projects</h1>

      <div
        className='projectsTable'
      >
        <div
          className='projectCell'
        >
          <h2>Rumblr</h2>
          <a
            href='https://rumblr.app'
          >
            <img
              className='thumbnail'
              alt='rumblr project thumbnail screenshot'
              src={statics.rumblrScreenshotThumbnail}
            />
          </a>
          <p>
            My first clone and first full stack project! In this project
            I attempted to clone as many features of Tumblr as I could.
            I also attempted to make my clone of Tumblr look and function
            as close as possible to the actual website.
          </p>
          <a
            className='githubRepoLink'
            href='https://github.com/johnobrien8642/RUMBLR_PROD'
          >
            Github repository
          </a>
        </div>
        <div
          className='projectCell'
        >
          <h2>Eight Queens Puzzle Solutions</h2>
          <a
            href='https://eight-queens-app-bk3o4.ondigitalocean.app'
          >
            <img
              className='thumbnail'
              alt='rumblr project thumbnail screenshot'
              src={statics.eightQueensThumbnail}
            />
          </a>
          <p>
            A simple app that returns random solutions to
            the Eight Queens Puzzle. I used OOP, Rails
            with React, Bootstrap and Sass.
          </p>
          <a
            className='githubRepoLink'
            href='https://github.com/johnobrien8642/RUMBLR_PROD'
          >
            Github repository
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects;