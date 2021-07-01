import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostIndexSchema = new Schema({
  hookBoolObj: Schema.Types.Mixed,
  indexDDObj: Schema.Types.Mixed,
  updatedAt: {
    type: Date,
    default: Date.now
  },
  kind: {
    type: String,
    default: 'PostIndex'
  }
}, { minimize: false })

const PostIndex = mongoose.model('PostIndex', PostIndexSchema, 'postIndex')

export default PostIndex;