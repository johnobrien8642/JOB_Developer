import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PostShow from '../posts/types/showOrUpdate/PostShow';
import Queries from '../../graphql/queries.js';
const { FETCH_POST } = Queries;

const SinglePostShow = () => {
  let { postId } = useParams();

  let { loading, error, data } = useQuery(FETCH_POST, {
    variables: {
      query: postId
    }
  })

  if (loading) return 'Loading...';
  if (error) return `Error: ${error}`;

  return (
    <div
      className='singlePostShowContainer'
    >
      <Link
        className='backToBlogLink'
        to='/blog'
      >
        back to blog
      </Link>

      <div
        className='singlePostShow'
      >
        <div
          className='post single'
        >
          <PostShow
            post={data.post}
          />
        </div> 
      </div>
    </div>
  )
}

export default SinglePostShow;