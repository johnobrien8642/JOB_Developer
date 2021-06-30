import React, { useState, useRef, useEffect } from 'react';
import mongoose from 'mongoose';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import dateAndTime from 'date-and-time';
import Scroll from 'react-scroll';

import PostNotes from '../../util/components/social/Post_Notes.js';
import PostOptions from '../../util/components/social/Post_Options.js';

import PostShowUtil from '../../util/functions/post_show_util.js';
import Queries from '../../../../graphql/queries';
import Mutations from '../../../../graphql/mutations';
import PostFormUtil from '../../util/functions/post_form_util.js';
import UpdateCacheUtil from '../../util/functions/update_cache_util.js';
const { postHeader, postBody, repostFooter, postTags } = PostShowUtil;
const { allowScroll, preventScroll } = PostFormUtil;
const { postDelete } = UpdateCacheUtil;
const { FETCH_FEED } = Queries;
const { DELETE_POST } = Mutations;
const scroller = Scroll.scroller;


const PostShow = ({ 
  post, 
  repostFormBool,
  update, 
  setUpdate,
  toggleUpdate,
  discover, 
  radar,
  repostCaption,
  setRepostCaption,
  dashboardFeed
}) => {
  let [notesActive, setNotesActive] = useState(false);
  let [repostActive, setRepostActive] = useState(false);
  let [confirmDelete, setConfirmDelete] = useState(false);
  let [copySuccess, setCopySuccess] = useState(false);
  let doesUserFollowUserRef = useRef(false);

  useEffect(() => {
    if (confirmDelete) {

      preventScroll(confirmDelete, document)

    }
    
  }, [confirmDelete])

  let [deletePost] = useMutation(DELETE_POST, {
    update(client) {
    
      postDelete(
        client, post, FETCH_FEED
      )
    }
  })

  // let { loading, error, data } = useQuery(FETCH_LIKES_REPOSTS_AND_COMMENTS, {
  //   variables: {
  //     postId: post._id
  //   }
  // })

  const toggleNotes = () => {
    if (notesActive) {
      setNotesActive(notesActive = false)
    } else {
      setNotesActive(notesActive = true)
    }
  }

  const notesAndOptions = () => {
    if (!repostFormBool) {
      return (
        <div>

        </div>
        // <React.Fragment>
        //   <PostNotes
        //     post={post}
        //     notesCount={data.fetchLikesRepostsAndComments.length}
        //     notes={data.fetchLikesRepostsAndComments}
        //     notesActive={notesActive}
        //     setNotesActive={setNotesActive}
        //   />
      
        //   <PostOptions
        //     post={post}
        //     notesCount={data.fetchLikesRepostsAndComments.length}
        //     notesActive={notesActive}
        //     setNotesActive={setNotesActive}
        //     toggleNotes={toggleNotes}
        //     update={update}
        //     setUpdate={setUpdate}
        //     toggleUpdate={toggleUpdate}
        //     repostActive={repostActive}
        //     setRepostActive={setRepostActive}
        //     confirmDelete={confirmDelete}
        //     setConfirmDelete={setConfirmDelete}
        //   />
        // </React.Fragment>
      )
    }
  }

  const renderConfirmDelete = () => {
    if (confirmDelete) {
      return (
        <React.Fragment>
          <div className='confirmDeleteModal' />
          <div
            className='confirmDelete'
          >
            <p>Are you sure you want to delete this post?</p>

            <div>
              <button
                className='cancelBtn'
                onClick={() => {
                  allowScroll(document)
                  setConfirmDelete(confirmDelete = false)
                }}
              >
                Cancel
              </button>

              <button
                className='deleteBtn'
                onClick={e => {
                  allowScroll(document)
                  deletePost({
                    variables: {
                      post: post
                    }
                  })
                  setConfirmDelete(confirmDelete = false)
                }}
              >
                Ok
              </button> 
            </div>
          </div>
        </React.Fragment>
      )
    }
  }

  // if (loading) return 'Loading...';
  // if (error) return `Error: ${error}`
  
  if (dashboardFeed) {
    return (
      <div
        className='dashboardShow'
      >
        <div
          className='titleAndDateContainer'
        >
          <Link
            to={`/blog/${post._id}`}
          >
            {post.title}
          </Link>
          <span>{post._id}</span>
          <h3>
            {
              dateAndTime.format(
                mongoose.Types.ObjectId(post._id).getTimestamp(), 
                'dddd, MMMM DD YYYY'
              )
            }
          </h3>
        </div>

        <div
          className='editAndDeleteContainer'
        >
          <Link
            to={`/edit/${post._id}`}
          >
            Edit
          </Link>

          <span
            className='deletePostBtn'
            onClick={() => {
              setConfirmDelete(confirmDelete = true)
            }}
          >
            Delete
          </span>
        </div>

        {renderConfirmDelete()}
      </div>
    )
  } else {
    return (
      <React.Fragment>
          <div
            className='titleAndDateContainer'
          >
            <Link
              to={`/blog/${post._id}`}
            >
              {post.title}
            </Link>
            <span
              hidden
            >{post._id}</span>
            <h3>
              {
                dateAndTime.format(
                  mongoose.Types.ObjectId(post._id).getTimestamp(), 
                  'dddd, MMMM DD YYYY'
                )
              }
            </h3>
          </div>
      
          {postBody(post)}

          <div
            className='copyLinkContainer'
          >
            <img
              className='copyLinkIcon'
              alt=''
              src="https://img.icons8.com/ios/64/000000/copy-link.png"
              onClick={() => {
                var text = `https://johnobriendeveloper.com/blog/${post._id}`
                navigator.clipboard.writeText(text)
                  .then(() => {
                    setCopySuccess(true)

                    setTimeout(() => {
                      setCopySuccess(false)
                    }, 1500)
                  })
              }}
            />
            <div
              className={
                copySuccess ? 'arrowRight active' :
                'arrowRight hidden'
              }
            />
            <div 
              className={
                copySuccess ? 'copySuccess active' :
                'copySuccess hidden'
              }
            >
              Copied
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default PostShow;