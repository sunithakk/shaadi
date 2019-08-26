import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { render } from "react-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";

render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/dashboard" component={Home} />

            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
