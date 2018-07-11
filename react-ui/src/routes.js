import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import CountDown from './components/Countdown';
import NotFound from './components/Shared/NotFound/NotFound';

import history from './history';


const Switches = () => (
    <Switch history={history}>
      <Route exact path="/" component={CountDown}/>
      <Route path="*" component={NotFound}/>
      <Redirect from="*" to="/404"/>
    </Switch>
);

export default Switches;

