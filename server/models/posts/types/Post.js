import mongoose from 'mongoose';
import searchable from 'mongoose-regex-search';
const Schema = mongoose.Schema;

const options = { discriminatorKey: 'kind' }

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true
  },
  allText: {
    type: String
  },
  descriptions: [
    {
      kind: String,
      content: String,
      displayIdx: Number
    }
  ],
  descriptionImages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Image'
    }
  ],
  tagIds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ],
  tagTitles: {
    type: String
  },
  mentions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Mention'
    }
  ],
  notesCount: {
    type: Number,
    default: 0
  },
  notesHeatLastTwoDays: {
    type: Number,
    default: 0
  },
  createdAtTimeString: {
    type: String
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
    default: 'Post'
  }
}, options)

PostSchema.plugin(searchable)
const Post = mongoose.model('Post', PostSchema, 'posts')

export default Post;