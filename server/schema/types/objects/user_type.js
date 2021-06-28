import graphql from 'graphql';
import mongoose from 'mongoose';
import AnyPostType from '../unions/any_post_type.js'
import TagType from '../objects/posts/util/tag_type.js'
import LikeType from '../objects/posts/util/like_type.js'
import RepostType from '../objects/posts/util/repost_type.js'
import FollowType from '../objects/posts/util/follow_type.js'
import ImageType from './posts/util/image_type.js';
const User = mongoose.model('User');
const { GraphQLObjectType, GraphQLString,
        GraphQLList, GraphQLInt,
        GraphQLBoolean, GraphQLID } = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    _id: { type: GraphQLID },
    blogName: { type: GraphQLString },
    password: { type: GraphQLString },
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean },
    createdAt: { type: GraphQLInt },
    lastUpdated: { type: GraphQLInt },
    kind: { type: GraphQLString },
  })
})

export default UserType;