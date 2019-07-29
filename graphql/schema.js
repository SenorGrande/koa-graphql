const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const gadgetGraphQLType =  require('./gadgetType');
const Gadget = require('../models/gadgets');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    gadget: {
      type: gadgetGraphQLType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        // This was the code in the tutorial but it didn't work
        // return Gadget.findById(<a href="http://args.id" class="link link-url" target="_blank" rel="external nofollow noopener noreferrer">args.id</a>)
        return Gadget.findById(args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});
