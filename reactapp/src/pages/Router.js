import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Home,
  Contact
} from '../components';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default Router;
