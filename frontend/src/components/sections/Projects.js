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
              className='rumblrThumbnail'
              alt='rumblr project thumbnail screenshot'
              src={statics.rumblrScreenshotThumbnail}
            />
          </a>
          <p>
            My first clone and first full stack project! In this project
            I attempted to clone as many features of Tumblr as I could.
            I also attempted to make my clone of Tumblr look as close as 
            possible to the actual website.
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