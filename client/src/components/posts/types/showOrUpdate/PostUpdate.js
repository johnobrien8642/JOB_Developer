import React from 'react';

import TextPostForm from '../create/TextPostForm';
import PhotoPostForm from '../create/PhotoPostForm';
import QuotePostForm from '../create/QuotePostForm';
import LinkPostForm from '../create/LinkPostForm';
import ChatPostForm from '../create/ChatPostForm';
import AudioPostForm from '../create/AudioPostForm';
import VideoPostForm from '../create/VideoPostForm';
import RepostForm from '../../util/components/social/Repost_Form';

const PostUpdate = ({ 
  post, 
  update,
  setUpdate,
  toggleUpdate,
  uploading,
  setUploading
}) => {
  
  return (
    <TextPostForm
      post={post}
      update={update}
      setUpdate={setUpdate}
      uploading={uploading}
      setUploading={setUploading}
    />
  )
}

export default PostUpdate;