import React , { Fragment } from "react"
import { isAuthenticated } from "../Auth"
import GlobalStyle from '../GlobalStyle'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import Login from '../Accounts/Login'
import Signup from '../Accounts/Signup'
import App from '../App'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
 
const Routes = () => (
  <Fragment> 
    <GlobalStyle/> 
    <BrowserRouter>
      <Switch>  
        {/* <PrivateRoute exact path="/" component={App} /> */}
        <Route exact path="/" component={Login} /> 
        <Route exact path="/join" component={Signup} /> 
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default Routes;
