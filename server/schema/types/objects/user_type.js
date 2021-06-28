import graphql from 'graphql';
const { GraphQLObjectType, GraphQLString,
        GraphQLInt, GraphQLBoolean, 
        GraphQLID } = graphql;

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