import jwt from 'jsonwebtoken';
import keys from '../../config/keys.js';
import Cookies from 'js-cookie';
import validateRegisterInput from '../validations/register.js';
import validateLoginInput from '../validations/login.js';
import bcrypt from 'bcryptjs';
////Uncomment for email auth
// import sendAuthEmail from './send_auth_email.js';
import User from '../models/User.js';

const register = async (data, ctx) => {
  try {
  const { message, isValid } = validateRegisterInput(data)

  if (!isValid) {
    throw new Error(message)
  }
  const { blogName, password } = data;
  
  const hashedPW = await bcrypt.hash(password, 10)

  const user = new User(
    {
    blogName: blogName,
    password: hashedPW,
    oldPasswords: [hashedPW]
    },
    err => {
      if (err) throw err;
    }
  )

  const token = await jwt.sign({ _id: user._id }, keys.secretOrKey)
  
  return user.save().then(user => {
    return { token, loggedIn: true, ...user._doc, ...user.blogName}
  })

  ////Uncomment for email auth, scroll to top, uncomment sendAuthEmail import
  // return user.save().then(user => {
  //   sendAuthEmail(user)
  //   return user
  // }).then(user => {
  //   return { token, loggedIn: true, ...user._doc, password: '' }
  // })


  } catch (err) {
    throw err;
  }
}

const logout = async data => {
  try {
    const decoded = jwt.verify(data, keys.secretOrKey);
    const { _id } = decoded;

    const user = await User.findById(_id)
    
    return { loggedIn: false, ...user._doc }
  } catch (err) {
    throw err;
  }
}

const login = async data => {
  try {
    const { message, isValid } = validateLoginInput(data)

    if (!isValid) {
      throw new Error(message)
    }

    const { blogName, password } = data;

    const user = await User.findOne({ blogName })

    if (!user) {
      throw new Error('User with that blogName does not exist')
    }

    if (bcrypt.compareSync(password, user.password)) {
      Cookies.set('currentUser', user.blogName)
      const token = jwt.sign({ _id: user._id }, keys.secretOrKey)
      Cookies.set('auth-token', token)
      return { token, loggedIn: true, ...user._doc, ...user.blogName}
    } else {
      throw new Error('Password is incorrect')
    }
  } catch(err) {
    throw err;
  }
}

const verify = async data => {
  try {
    const decoded = jwt.verify(data.token, keys.secretOrKey);
    const { _id } = decoded;
   
    const user = await User.findById({ _id });

    let loggedIn;
    
    if (user) {
      loggedIn = true;
      return { loggedIn, _id }
    } else {
      loggedIn = false;
      return { loggedIn }
    }
  } catch(err) {
    throw err
  }
}

export default { register, logout, login, verify };