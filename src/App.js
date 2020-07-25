import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"


//  <Nav.Link href="https://docs.google.com/document/d/1nHbvtAf2ocPFz7yP8Sr8DLAQFcXk-KlLh-mxLlfFT8Q/edit?usp=sharing" target="_blank">Resume</Nav.Link>

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about-me" component={AboutMe} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
