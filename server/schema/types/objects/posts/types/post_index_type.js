import graphql from 'graphql';
import mongoose from 'mongoose';
import { GraphQLJSONObject } from 'graphql-type-json';
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const PostIndexType = new GraphQLObjectType({
  name: 'PostIndexType',
  fields: () => ({
    _id: { type: GraphQLID },
    hookBoolObj: { type: GraphQLJSONObject },
    indexDDObj: { type: GraphQLJSONObject },
    updatedAt: { type: GraphQLString },
    kind: { type: GraphQLString }
  })
})

export default PostIndexType;