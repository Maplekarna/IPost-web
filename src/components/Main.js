import React, { useState }  from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function Main(props) {
    const { isLoggedIn, handleLoggedIn } = props;
    
    const showLogin = () => {
        return isLoggedIn ? (
          <Redirect to="/home" />
        ) : (
          <Login handleLoggedIn={handleLoggedIn} />
        );
      };
     
      const showHome = () => {
        return isLoggedIn ? <Home /> : <Redirect to="/login" />;
      };
     

    return (
        <div className="main">
            <Switch>
                <Route path = "/login" render = {showLogin} />
                <Route path = ":/register" component = {Register} />
                <Route path = "/home" component = {Home} />
            </Switch>
            
        </div>
    );
}

export default Main;

// router 
//  /login --> login(component)
//  /register --> Register
//  /home --> home