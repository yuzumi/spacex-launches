const axios = require('axios');
const { 
  GraphQLObjectType, 
  GraphQLInt, 
  GraphQLString, 
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: {
      type: GraphQLString
    },
    rocket_name: {
      type: GraphQLString
    },
    rocket_type: {
      type: GraphQLString
    },
  })
});

const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: {
      type: GraphQLInt
    },
    mission_name: {
      type: GraphQLString
    },
    launch_year: {
      type: GraphQLString
    },
    launch_date_local: {
      type: GraphQLString
    },
    launch_success: {
      type: GraphQLBoolean
    },
    rocket: {
      type: RocketType
    },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    launches: {
      type: new GraphQLList(LaunchType),
      resolve: async (_parent, _args) => {
        const response = await axios.get(`https://api.spacexdata.com/v3/launches`);

        return response.data;
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: {
          type: GraphQLInt
        }
      },
      resolve: async (_parent, args) => {
        const response = await axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
      
        return response.data;
      }
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve: async (_parent, _args) => {
        const response = await axios.get(`https://api.spacexdata.com/v3/rockets`);

        return response.data;
      }
    },
    rocket: {
      type: RocketType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: async (_parent, args) => {
        const response = await axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
      
        return response.data;
      }
    },
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
