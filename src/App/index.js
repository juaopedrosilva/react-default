import React, { Fragment } from 'react' 
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Report from './Report';


const App = () => (
    <Fragment> 
        <BrowserRouter>
            <Switch>  
                {/* <PrivateRoute exact path="/" component={App} /> */}
                <Route exact path="/" component={() => <h1>Ola</h1>} /> 
                <Route  path="/admin/relatorio" component={Report} /> 
            </Switch>
        </BrowserRouter>
  </Fragment>
)
 
export default App