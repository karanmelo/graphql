const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar JSON

    type Query {
      message: String,
      getRankingPersons: JSON
    }
`;

module.exports = typeDefs;