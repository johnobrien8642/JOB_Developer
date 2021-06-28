import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PhotoPostForm from '../posts/types/create/PhotoPostForm';
import TextPostForm from '../posts/types/create/TextPostForm';
import QuotePostForm from '../posts/types/create/QuotePostForm';
import LinkPostForm from '../posts/types/create/LinkPostForm';
import ChatPostForm from '../posts/types/create/ChatPostForm';
import AudioPostForm from '../posts/types/create/AudioPostForm';
import VideoPostForm from '../posts/types/create/VideoPostForm';
import ProfilePic from '../user/util/components/Profile_Pic';

import PostFormUtil from '../posts/util/functions/post_form_util.js'
const { preventScroll, allowScroll } = PostFormUtil;

const PostsNav = ({
  user,
  mobile,
  uploading,
  setUploading
}) => {
  let [postFormOpen, setPostFormOpen] = useState(false);
  let [textPostActive, setTextPostActive] = useState(false);
  let [photoPostActive, setPhotoPostActive] = useState(false);
  let [quotePostActive, setQuotePostActive] = useState(false);
  let [linkPostActive, setLinkPostActive] = useState(false);
  let [chatPostActive, setChatPostActive] = useState(false);
  let [audioPostActive, setAudioPostActive] = useState(false);
  let [videoPostActive, setVideoPostActive] = useState(false);
  let [postFormModal, setPostFormModal] = useState(false);
  let [open, setOpen] = useState(false);
  let history = useHistory();

  let iconUrls = {
    photo: { 
      browser: "https://img.icons8.com/fluent/64/000000/old-time-camera.png",
      mobile: "https://img.icons8.com/ios-glyphs/64/000000/camera.png"
    },
    quote: {
      browser: "https://img.icons8.com/fluent/64/000000/quote-left.png",
      mobile: "https://img.icons8.com/fluent-systems-filled/64/000000/quote-left.png"
    },
    link: {
      browser: "https://img.icons8.com/flat-round/64/000000/link--v1.png",
      mobile: "https://img.icons8.com/metro/64/000000/link.png"
    },
    chat: {
      browser: "https://img.icons8.com/officel/64/000000/speech-bubble-with-dots.png",
      mobile: "https://img.icons8.com/fluent-systems-filled/64/000000/speech-bubble-with-dots.png"
    },
    audio: {
      browser: "https://img.icons8.com/nolan/64/headphones.png",
      mobile: "https://img.icons8.com/fluent-systems-filled/64/000000/headphones.png"
    },
    video: {
      browser: "https://img.icons8.com/nolan/64/camcorder-pro.png",
      mobile: "https://img.icons8.com/material-rounded/64/000000/camcorder-pro.png"
    }
  }
  
  useEffect(() => {
    if (mobile) {
      var el = document.querySelector('.mobilePostsNav.open')
      
      if (el) {
        el.focus()
      }

      preventScroll(open, document)
    }

    return () => {
      allowScroll(document)
    }
  })
  
  if (mobile) {
    setTimeout(() => {
      setOpen(open = true)
    }, 100)
  }
  
  const handleMobilePostsNavModalClass = (uploading, mobile, open) => {
    if (uploading) {
      return 'mobilePostsNavModal hidden'
    } else if (mobile && !open) {
      return 'mobilePostsNavModal'
    } else if (mobile && open) {
      return 'mobilePostsNavModal open'
    }
  }
  
  const handleMobileOrBrowserPostsNavClass = (uploading, mobile, open) => {
    if (uploading && mobile && postFormOpen) {
      return 'mobilePostsNav hidden'
    } else if (mobile && open && postFormOpen)  {
      return 'mobilePostsNav open postFormOpen'
    } else if (mobile && open) {
      return 'mobilePostsNav open'
    }else if (mobile && !open) {
      return 'mobilePostsNav'
    } else {
      return 'browserPostsNav'
    }
  }

  return (
      
    <TextPostForm
      user={user}
      textPostActive={textPostActive}
      setTextPostActive={setTextPostActive}
      postFormModal={postFormModal}
      setPostFormModal={setPostFormModal}
      uploading={uploading}
      setUploading={setUploading}
    />
  )   
}

export default PostsNav;