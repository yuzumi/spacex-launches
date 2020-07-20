const cors = require('cors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(
  port, 
  () => {
    console.log(`Server started on port ${port}`)
  }
);
