import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch, Link } from "react-router-dom";

import IndexContainer from "./indexContainer";
import NotFound404Container from "./notFound404Container";
import RegisterContainer from "./registerContainer";
import LoginContainer from "./loginContainer";


class AppContainer extends Component {
  render() {
    return (
        <Router>
         <div>
           {}

           <Switch>
               <Route path="/" exact component={IndexContainer} />
               <Route path="/register" exact component={RegisterContainer} />
               <Route path="/login" exact component={LoginContainer} />
               <Route component={NotFound404Container} />
           </Switch>
         </div>
       </Router>
    );
  }
}

export default withRouter(AppContainer);
