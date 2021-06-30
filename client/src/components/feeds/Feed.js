import React, { useEffect, useRef, useState } from 'react';
import mongoose from 'mongoose';
import dateAndTime from 'date-and-time';
import { useQuery, useApolloClient } from '@apollo/client';
import PostUpdateOrShow from '../posts/types/showOrUpdate/PostUpdateOrShow';
import Cookies from 'js-cookie';
import Queries from '../../graphql/queries';
import FeedUtil from '../posts/util/functions/feed_util.js';
import PostShowUtil from '../posts/util/functions/post_show_util.js';
const { FETCH_FEED } = Queries;
const { infiniteScroll, updateCacheInfScroll,
        handleData } = FeedUtil;
const { handlePostClassName } = PostShowUtil;

const Feed = ({
  currentUser,
  uploading,
  setUploading,
  dashboardFeed,
  searchQuery,
  setSearchQuery,
  results
}) => {
  let feedArr = useRef([])
  let fetchMoreDiv = useRef(null);
  let fetchMoreDivId = useRef('#fetchMoreFeed');
  let cursorId = useRef(null);
  let query = useRef(Cookies.get('currentUser'))
  let gqlQuery = useRef(FETCH_FEED)
  let endOfPosts = useRef(false)
  let [update, setUpdate] = useState(false)
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
  
  

  let { loading: feedLoading, 
        error: feedError, data: feed, refetch } = useQuery(FETCH_FEED, {
        variables: {
          query: 'admin',
          cursorId: null
        },
        fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
   
    return () => {
      refetch()
    }
  }, [])

  if (feedLoading) return '';
  if (feedError) return `Error: ${feedError}`;
  
  handleData(
    results && searchQuery ? results : feed, 
    feedArr, 
    cursorId,
    endOfPosts
  )

  const resultsDropDown = () => {
    if (results && searchQuery) {
      return (
        <div
          className='resultsDD'
        >
          {results.searchPosts.map(obj => {
            return (
              <div
                key={obj._id}
                className='titleAndDateContainer'
              >
                <h1>{obj.title}</h1>
                <span
                  hidden
                >{obj._id}</span>
                <h3>
                  {
                    dateAndTime.format(
                      mongoose.Types.ObjectId(obj._id).getTimestamp(), 
                      'dddd, MMMM DD YYYY'
                    )
                  }
                </h3>
              </div>
            )
          })}
        </div>
      )
    }
  }

  return(
    <div
    className='blogFeed'
    >
      <div
        className='searchAndIndexNav'
      >
        <div
          className='searchInput'
        >
          <input
            placeholder='search posts'
            className='searchInput'
            value={searchQuery}
            onChange={e => {
              setSearchQuery(searchQuery = e.target.value)
            }}
          />

          {resultsDropDown()}
        </div>

        <div
          className='postIndex'
        >
          <span
            onClick={() => {

            }}
          >
            Post Index
          </span>

        </div>
      </div>

      {feedArr.current.map((obj, i) => {
        return (
          <div
            className={handlePostClassName(obj)}
            key={obj._id}
          >
            <PostUpdateOrShow
              post={obj}
              dashboardFeed={dashboardFeed}
              update={update}
              setUpdate={setUpdate}
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