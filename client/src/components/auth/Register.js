import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import Queries from '../../graphql/queries';
import Mutations from '../../graphql/mutations';
const { REGISTER_USER } = Mutations;
const { IS_LOGGED_IN } = Queries;


const Register = () => {
  let [blogName, setBlogName] = useState('');
  let [password, setPassword] = useState('');
  let [errorMessages, addErrorMessage] = useState([]);
  let history = useHistory();

  const [ registerUser ] = useMutation(REGISTER_USER, {
    onError(error) {
      if(error.message === 'Account already exists with that email') {
        history.push({
          pathname: '/login',
          state: {
            errMessage: error.message
          }
        })
      } else {
        addErrorMessage(errorMessages = [])
        error.graphQLErrors.forEach((error, i) => {
          addErrorMessage(errorMessages.concat(error.message))
        })
      }
    },
    onCompleted({ registerUser }) {
      const { token, blogName } = registerUser;
      Cookies.set('auth-token', token)
      Cookies.set('currentUser', blogName)
      resetInputs();
      window.location.reload();
    },
    update(client, { data }) {
      client.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: data.registerUser.loggedIn,
        }
      })
    }
  })

  const resetInputs = () => {
    setBlogName(blogName = '');
    setPassword(password = '');
    addErrorMessage(errorMessages = []);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      
    var instanceData = {
      blogName: blogName,
      password: password,
    }

    registerUser({ 
      variables: {
        instanceData: instanceData
      }
    })
  }

  return (
    <div
      className='registerForm'
    >
      <h1>One time register</h1>
      
        <form
          onSubmit={e => {
            handleSubmit(e)
          }}
        >

        <ul
          className='authErrors'
        >
          {errorMessages.map((error, i) => {
            return <li key={i}>{error}</li>
          })}
        </ul>

        <input
          type='text'
          value={blogName}
          placeholder={'username'}
          onChange={e => setBlogName(blogName = e.target.value)}
        />
      
        <input
          type='password'
          value={password}
          placeholder={'Password'}
          onChange={e => setPassword(password = e.target.value)}
        />

        <button 
          type='submit'
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

export default Register;