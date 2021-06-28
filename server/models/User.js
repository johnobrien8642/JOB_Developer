import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  blogName: {
    type: String, 
    required: true,
    index: true
  },
  oldPasswords: [
    {
      type: String
    }
  ],
  password: {
    type: String,
    required: true,
    min: 8,
    max: 32
  },
  token: {
    type: String,
    required: false
  },
  loggedIn: {
    type: Boolean,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  kind: {
    type: String,
    default: 'User'
  }
})

const User = mongoose.model('User', UserSchema, 'users');

export default User;
