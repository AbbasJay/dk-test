import React, { Component } from "react";
import WelcomePage from "./components/welcomePage/welcomePage";
import SuccessPage from "./components/successPage/successPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav-container">
            <div className="nav-bar">
              <Link to="/" className="route-link" />
              <Link to="/success" className="route-link" />
            </div>
          </nav>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/success" exact component={SuccessPage} />
        </div>
      </Router>
    );
  }
}

export default App;
