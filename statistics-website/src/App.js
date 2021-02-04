import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Statistics from "./components/pages/Statistics";
import LeagueSchedules from "./components/pages/LeagueSchedules";
import Videos from "./components/pages/Videos";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/videos" component={Videos} />
          <Route path="/league-schedules" component={LeagueSchedules} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
