import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
// import "assets/css/now-ui-kit.min.css";
// import "assets/css/now-ui-kit.css.map";
import "./assets/demo/demo.css";

// pages for this kit
import Index from "./views/Index";
import NucleoIcons from "./views/NucleoIcons.js";
import LoginPage from "./views/examples/LoginPage.js";
import LandingPage from "./views/examples/LandingPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/login-page"
        render={(props) => <LoginPage {...props} />}
      />
      <Redirect to="/index" />
      <Redirect from="/" to="/index" />
    </Switch>
  </Router>,
  document.getElementById("root")
);