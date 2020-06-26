import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";

import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Listings from "./components/Listings/Listings";
import Listing from "./components/Listing/Listing";
import ScrollToTop from "./components/Other/ScrollToTop";

import "./assets/style.css";
import { db } from "./data/firebase";

export default function App() {
  var [homes, updateHomes] = React.useState();

  React.useEffect(() => {
    db.collection("homes")
      .orderBy("order")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc);
        updateHomes(data);
      });
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/listings">
            <Listings homes={homes} />
          </Route>
          <Route path="/listings">
            <Listing homes={homes} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}
