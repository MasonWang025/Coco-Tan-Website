import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";

import "./assets/style.css";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            Home.
          </Route>
          <Route path="/listings">Listings</Route>
          <Route path="/about">About Coco</Route>
          <Route path="/contact">Contact Coco</Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}
