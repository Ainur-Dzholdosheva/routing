import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Services from "./Services";
import PageNotFound from "./PageNotFound";
import Service from "./Service";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" activeClassName="active">
              About me
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">
              Services
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/services/:services" children={<Service />} />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
