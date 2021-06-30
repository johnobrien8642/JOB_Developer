import React, { useState } from 'react';

import PostUpdate from '../showOrUpdate/PostUpdate';
import PostShow from '../showOrUpdate/PostShow';

const PostUpdateOrShow = ({
  post,
  currentUser,
  repostFormBool,
  uploading,
  setUploading,
  dashboardFeed
}) => {
  let [update, setUpdate] = useState(false)

  const toggleUpdate = () => {
    if (update) {
      setUpdate(update = false)
    } else { 
      setUpdate(update = true)
    }
  }
  
  if (update) {
    return (
      <PostUpdate
        user={currentUser}
        post={post}
        update={update}
        setUpdate={setUpdate}
        toggleUpdate={toggleUpdate}
        uploading={uploading}
        setUploading={setUploading}
        dashboardFeed={dashboardFeed}
      />
    )
  } else {
    return (
      <PostShow
        currentUser={currentUser}
        post={post}
        update={update}
        setUpdate={setUpdate}
        toggleUpdate={toggleUpdate}
        repostFormBool={repostFormBool}
        uploading={uploading}
        setUploading={setUploading}
        dashboardFeed={dashboardFeed}
      />
    )
  }
}

export default PostUpdateOrShow;