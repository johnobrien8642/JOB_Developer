import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import TextPostForm from '../posts/types/create/TextPostForm';
import Logout from '../auth/Logout';
import Feed from '../feeds/Feed';
import Queries from '../../graphql/queries.js';
const { SEARCH_POSTS } = Queries;

const Dashboard = () => {
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
      className='dashboard'
    >
      <Logout />
      <TextPostForm
        mainForm={true}
        textPostActive={true}
      />
      <Feed
        results={data ? data : null}
        dashboardFeed={true}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  )
}

export default Dashboard;