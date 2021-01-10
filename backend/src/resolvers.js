const GraphQLJSON = require('graphql-type-json');

module.exports = {
    JSON: GraphQLJSON,
    Query: {
        message: _ => 'Esse é um exemplo de servidor GraphQL.',
        getRankingPersons: (_, __, { dataSources }) => dataSources.chartsAPI.getRankingPerson()
    }
};