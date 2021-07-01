import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import Feed from '../feeds/Feed';
import Queries from '../../graphql/queries.js';
const { SEARCH_POSTS } = Queries;


const BlogFeed = () => {
  let [searchQuery, setSearchQuery] = useState('');

  let [searchPosts, { data }] = useLazyQuery(SEARCH_POSTS, {
    variables: {
      query: {
        string: searchQuery
      }
    }
  })

  useEffect(() => {
    if (searchQuery) {
      searchPosts({ 
        variables: { 
          query: { 
            string: searchQuery 
          }
        }
      })
    }
  }, [searchQuery, searchPosts])

  return (
    <div
      className='blogFeedContainer'
    >
      <Feed
        results={data ? data : null}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  )
}

export default BlogFeed;