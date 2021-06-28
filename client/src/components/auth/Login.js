import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

import Mutations from '../../graphql/mutations'
import Queries from '../../graphql/queries'
const { LOGIN_USER } = Mutations;
const { IS_LOGGED_IN } = Queries;

const Login = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [errorMessages, addErrorMessage] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    if (location.state) {
      addErrorMessage(errorMessages.concat(location.state.errMessage))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const [ loginUser ] = useMutation(LOGIN_USER, {
    onError(error) {
      addErrorMessage(errorMessages = [])
      error.graphQLErrors.forEach((error, i) => {
        addErrorMessage(errorMessages.concat(error.message))
      })
    },
    onCompleted({ loginUser }) {
      const { token, blogName } = loginUser;
      Cookies.set('auth-token', token)
      Cookies.set('currentUser', blogName)
      resetInputs();
      window.location.reload();
    },
    update(client, { data }) {
      client.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: data.loginUser.loggedIn,
        }
      })
    }
  })
  
  const resetInputs = () => {
    setEmail(email = '');
    setPassword(password = '');
    addErrorMessage(errorMessages = []);
  }

  return (
    <div
      className='loginForm'
    >
      <h1>Developer blog log in</h1>

      <form
        onSubmit={e => {
          e.preventDefault();
          loginUser({
            variables: {
              email, 
              password 
            }
          })
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
          value={email}
          placeholder={'Email'}
          onChange={e => setEmail(email = e.target.value)}
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
          Login
        </button>
      </form>
    </div>
  )
}

export default Login;
