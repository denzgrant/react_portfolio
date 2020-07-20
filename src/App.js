import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
