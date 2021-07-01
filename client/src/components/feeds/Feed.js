import React, { useEffect, useRef, useState } from 'react';
import { useQuery, useApolloClient } from '@apollo/client';
import PostUpdateOrShow from '../posts/types/showOrUpdate/PostUpdateOrShow';
import NavBar from '../sections/Nav_Bar';
import Cookies from 'js-cookie';
import Queries from '../../graphql/queries';
import FeedUtil from '../posts/util/functions/feed_util.js';
import PostShowUtil from '../posts/util/functions/post_show_util.js';
const { FETCH_FEED, FETCH_INDEX } = Queries;
const { infiniteScroll, updateCacheInfScroll,
        handleData } = FeedUtil;
const { handlePostClassName } = PostShowUtil;

const Feed = ({
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

  let { loading: indexLoading, 
        error: indexError, data: indexData } = useQuery(FETCH_INDEX, {
          fetchPolicy: 'cache-and-network'
        })

  useEffect(() => {
   
    return () => {
      refetch()
    }
  }, [refetch])

  if (feedLoading || indexLoading) return '';
  if (feedError || indexError) return `Error: ${feedError} ${indexError}`;
  
  if (dashboardFeed) {
    handleData(
      results && searchQuery ? results : feed, 
      feedArr, 
      cursorId,
      endOfPosts
    )
  } else {
    handleData(
      feed, 
      feedArr, 
      cursorId,
      endOfPosts
    )
  }

 

  return(
    <div
    className='blogFeed'
    >
      
      <NavBar 
        dashboardFeed={dashboardFeed}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        results={results}
        indexData={indexData}
      />

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