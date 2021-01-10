const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs  = require('./src/schema');
const resolvers = require('./src/resolvers');

const ChartsAPI = require('./src/datasources/charts');

var port = process.env.PORT || 8080;

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  dataSources: () =>({chartsAPI: new ChartsAPI()}),
  introspection: true,
  playground: true
});

const app = express();
server.applyMiddleware({ app });

app.listen(port, function () {
  console.log('Servidor online ✔️')
});