import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={About} />
      <Route path="/home" component={Home} />
    </HashRouter>
  );
}

export default App;
