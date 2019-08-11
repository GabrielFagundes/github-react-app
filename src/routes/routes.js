import React from "react";
import { Route, Switch } from "react-router-dom";
import { PageContainer } from '../components/layout/page/Container/Container'
import Users from '../pages/users/Users'
import Repositories from '../pages/repositories/Repositories'
import UserRepos from '../pages/userRepos/UserRepos'

const Routes = () => (
  <PageContainer>
    <Switch>
      <Route exact path="/" component={Users} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/:username/repos" component={UserRepos} />
      <Route exact path="/repositories" component={Repositories} />
      <Route component={NoMatch} />
    </Switch>
  </PageContainer>
);

const NoMatch = () => <h2>404 - Not Found</h2>;

export default Routes;
