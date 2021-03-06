import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'App';
import apolloClient from 'apollo-client';
import * as serviceWorker from 'serviceWorker';

import 'assets/bootstrap-lux.min.css';

ReactDOM.render(
  <StrictMode>
    <Router>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
