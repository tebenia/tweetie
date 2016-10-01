import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import MainLayout from '/imports/ui/layouts/main';
import TweetStream from '/imports/ui/components/tweetStream';
import Profile from '/imports/ui/components/profile';
import Notifications from '/imports/ui/components/notifications';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={TweetStream}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/notifications" component={Notifications}/>
    </Route>
  </Router>
);

export default Routes;
