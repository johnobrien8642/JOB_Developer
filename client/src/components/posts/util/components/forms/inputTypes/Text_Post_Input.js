import React, { useEffect } from 'react';

import PostUpdateUtil from '../../../functions/post_update_util.js';
const { reassembleTextPostStatics } = PostUpdateUtil;

const TextPostInput = ({
  post,
  title, 
  setTitle,
  dashboardFeed
}) => {

  useEffect(() => {
    if (post) {
      var el = document.querySelector('.titleInput')
      
      if (el) {
        el.textContent = post.title
        reassembleTextPostStatics(post, title, setTitle)
      }
    }
    //eslint-disable-next-line
  }, [])

  return (
    <div
      className='titleInputContainer'
    >
      <span
        data-placeholder='Title'
        className={
          title ? `titleInput ${dashboardFeed ? 'dash': ''} active` : 
          `titleInput ${dashboardFeed ? 'dash': ''} placeholder`
        }
        contentEditable='true'
        onInput={e => {
          setTitle(title = e.target.textContent)
        }}
      ></span>
    </div>
  )
}

export default TextPostInput;