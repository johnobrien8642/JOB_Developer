import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

const Links = () => {

  return (
    <section
    className='linksContainer'
    >

      <Element name='linksScrollEl' />
      <h1>Links</h1>

      <div>
        <a
          className='githubLink'
          href='https://github.com/johnobrien8642'
        >
          <img
            alt='github logo'
            src="https://img.icons8.com/ios-glyphs/100/000000/github.png"
          />
        </a>
        <a
          className='linkedinLink'
          href='https://www.linkedin.com/in/john-o-brien-33b4a4250/'
        >
          <img
            alt='linkedin logo'
            src="https://img.icons8.com/ios-glyphs/100/000000/linkedin.png"
          />
        </a>
        <a
          className='stackoverflowLink'
          href='https://stackoverflow.com/users/13836220/john-obrien'
        >
          <img
            alt='stack overflow link'
            src="https://img.icons8.com/ios/100/000000/stackoverflow.png"
          />
        </a>
      </div>
    </section>
  )
}

export default Links;