import React from 'react';

import TextPostForm from '../create/TextPostForm';

const PostUpdate = ({ 
  post, 
  update,
  setUpdate,
  toggleUpdate,
  uploading,
  setUploading,
  dashboardFeed
}) => {
  
  return (
    <TextPostForm
      post={post}
      update={update}
      setUpdate={setUpdate}
      uploading={uploading}
      setUploading={setUploading}
      dashboardFeed={dashboardFeed}
    />
  )
}

export default PostUpdate;