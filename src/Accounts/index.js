import React from "react";
import { Provider } from "react-redux";

import store from "./store";
 
import Signup from './Signup'

const Accounts = () => (
  <Provider store={store}> 
    <Signup/>
  </Provider>
)

export default Accounts