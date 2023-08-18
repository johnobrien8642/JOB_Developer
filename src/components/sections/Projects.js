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
          href='https://rumblr-prod-2-lbfdj.ondigitalocean.app/login'
          thumbnailSrc={statics.rumblrScreenshotThumbnail}
          description='Full-featured and fully operational Create React App clone of Tumblr, frontend
          and backend, over 90+ features.'
          githubLink='https://github.com/johnobrien8642/RUMBLR_PROD'
        />
        <ProjectCell
          title='Writing and Photo Website Demo'
          href='https://personal-site-demo-xi.vercel.app/'
          thumbnailSrc={statics.personalSiteThumbnail}
          description='Simply designed Next.js blog website with admin features. Upload photos,
          writing pieces with chaptered sections, and manage the database directly through
          an admin-accessible Repl window.'
          githubLink='https://github.com/johnobrien8642/personal-site/tree/portfolio'
        />
        <ProjectCell
          title='API Demo'
          href='https://mui-ts-react-example.vercel.app/'
          thumbnailSrc={statics.coolCatDemoThumbnail}
          description='A quirky Next.js project that utilizes
          thecatapi.com API to deliver pictures of random cats. Try favoriting
          and unfavoriting the cats!'
          githubLink='https://github.com/johnobrien8642/mui-ts-react-example/tree/cat-refactor'
        />
      </Flex>
    </section>
  )
}

export default Projects;