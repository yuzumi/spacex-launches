import React from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';

import Launch from 'components/Launch';
import Launches from 'components/Launches';

const App = () => (
  <div className="app">
    <Container>
      <Route exact path="/" component={Launches} />
      <Route path="/launch/:flight_number" component={Launch} />
    </Container>
  </div>
);

export default App;
