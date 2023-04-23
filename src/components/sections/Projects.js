import React from 'react';
import Scroll from 'react-scroll';
import statics from '../../util/statics.js';
import { Flex } from '@chakra-ui/react'
import ProjectCell from './Project_Cell.js';

const Element = Scroll.Element;
<Element name='projectsScrollEl' />

const Projects = () => {

  return (
    <section
      className='projectsContainer'
      >
      <Element name='projectsScrollEl' />
      <h1>Projects</h1>

      <Flex
        className='projectsTable'
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
      >
        <ProjectCell
          title='Rumblr'
          href='https://rumblr.app'
          thumbnailSrc={statics.rumblrScreenshotThumbnail}
          description='A full-featured, fully functional clone of Tumblr. A Create React App,
          this clone has over 90+ features, including Social Media support such as
          User and Tag follows, Post likes, and many more!'
          githubLink='https://github.com/johnobrien8642/RUMBLR_PROD'
        />
        <ProjectCell
          title='Writing and Photo Website Demo'
          href='https://personal-site-demo-xi.vercel.app/'
          thumbnailSrc={statics.personalSiteThumbnail}
          description='A full-featured Writing and Photography website with admin support. Upload photos,
          writing pieces with chaptered sections, and manage the database directly through
          an admin-accessible Repl window.'
          githubLink='https://github.com/johnobrien8642/personal-site/tree/portfolio'
        />
        <ProjectCell
          title='API Demo'
          href='https://mui-ts-react-example.vercel.app/'
          thumbnailSrc={statics.coolCatDemoThumbnail}
          description='A website utilizing the thecatapi.com and displaying a random selection of
          cool cats. In this website you can favorite cat pictures and watch them get uploaded
          to the Favorites feed in real time, and increase the favorites count!'
          githubLink='https://github.com/johnobrien8642/mui-ts-react-example/tree/cat-refactor'
        />
      </Flex>
    </section>
  )
}

export default Projects;