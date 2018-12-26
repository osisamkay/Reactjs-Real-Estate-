import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import GlobalStyle from './components/GlobalStyle';
import Listing from './components/Listings/Listing';
import ListView from './components/Listings/ListView';
import Sellpage from './components/SellPage/Sellpage';
import SignupPage from './components/Signup_Login/SignupPage';

const Routes = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Listings" component={Listing}></Route>
        <Route exact path="/Sellpage" component={Sellpage}></Route>
        <Route exact path="/sign" component={SignupPage}></Route>
        <Route path="/ListView/:id" component={ListView}></Route>
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
