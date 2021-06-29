import React, { useEffect, useRef } from 'react';
import { useQuery, useApolloClient } from '@apollo/client';
import { Link } from 'react-router-dom';
import PostUpdateOrShow from '../posts/types/showOrUpdate/PostUpdateOrShow';
import Cookies from 'js-cookie';
import Queries from '../../graphql/queries';
import FeedUtil from '../posts/util/functions/feed_util.js';
import ProfilePic from '../user/util/components/Profile_Pic';
import PostLoading from '../nav/Post_Loading';
import FollowButton from '../posts/util/components/social/Follow_Button';
import PostShowUtil from '../posts/util/functions/post_show_util.js';
const { FETCH_FEED } = Queries;
const { infiniteScroll, updateCacheInfScroll,
        handleData } = FeedUtil;
const { handlePostClassName } = PostShowUtil;

const Feed = ({
  currentUser,
  uploading,
  setUploading
}) => {
  let feedArr = useRef([])
  let fetchMoreDiv = useRef(null);
  let fetchMoreDivId = useRef('#fetchMoreFeed');
  let cursorId = useRef(null);
  let query = useRef(Cookies.get('currentUser'))
  let gqlQuery = useRef(FETCH_FEED)
  let endOfPosts = useRef(false)
  const client = useApolloClient();
  
  useEffect(() => {
    
    var scroll = infiniteScroll(
      client, 
      updateCacheInfScroll,
      query, 
      gqlQuery,
      cursorId, 
      fetchMoreDiv,
      fetchMoreDivId
    )
    
    return () => {
      document.removeEventListener('scroll', scroll)
    }
    //eslint-disable-next-line
  }, [])
  
  let { loading, error, data } = useQuery(FETCH_FEED, {
    variables: {
      query: 'admin',
      cursorId: null
    },
  })

  if (loading) return '';
  if (error) return `Error: ${error}`;
  
  console.log(data)
  handleData(data, feedArr, cursorId, endOfPosts)

  return(
    <div
    className='blogFeed'
    >
      {feedArr.current.map((obj, i) => {
        return (
          <div
            className={handlePostClassName(obj)}
            key={obj._id}
          >
            <PostUpdateOrShow
              post={obj}
              currentUser={currentUser}
              uploading={uploading}
              setUploading={setUploading}
            />
          </div>
        )
      })}
      <div
        id='fetchMoreFeed'
      >
      </div>
    </div>
  )
}

export default Feed;