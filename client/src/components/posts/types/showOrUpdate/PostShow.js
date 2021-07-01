import React, { useState } from 'react';
import mongoose from 'mongoose';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import dateAndTime from 'date-and-time'

import PostShowUtil from '../../util/functions/post_show_util.js';
import Queries from '../../../../graphql/queries';
import Mutations from '../../../../graphql/mutations';
import UpdateCacheUtil from '../../util/functions/update_cache_util.js';
const { postBody } = PostShowUtil;
const { postDelete } = UpdateCacheUtil;
const { FETCH_FEED } = Queries;
const { DELETE_POST } = Mutations;

const PostShow = ({ 
  post, 
  dashboardFeed
}) => {
  let [confirmDelete, setConfirmDelete] = useState(false);
  let [copySuccess, setCopySuccess] = useState(false);

  let [deletePost] = useMutation(DELETE_POST, {
    update(client) {
    
      postDelete(
        client, post, FETCH_FEED
      )
    }
  })

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
                  setConfirmDelete(confirmDelete = false)
                }}
              >
                Cancel
              </button>

              <button
                className='deleteBtn'
                onClick={() => {
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