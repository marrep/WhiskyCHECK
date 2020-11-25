import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Home from "../routes/home/Home";
import { GlobalWrapper } from "./AppStyled";

export default function App() {
  return (
    <GlobalWrapper>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <Navigation />
    </GlobalWrapper>
  );
}
