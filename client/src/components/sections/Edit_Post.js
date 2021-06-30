import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import TextPostForm from '../posts/types/create/TextPostForm';
import Queries from '../../graphql/queries.js';
const { FETCH_POST } = Queries;

const EditPost = () => {
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
      className='editPostContainer'
    >
      <TextPostForm
        post={data.post}
        update={true}
      />
    </div>
  )
}

export default EditPost;