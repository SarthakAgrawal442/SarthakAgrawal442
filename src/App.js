import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Upload from "./components/Upload";
import Explore from "./components/Explore";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Feed} />
        <Route path="/profile" component={Profile} />
        <Route path="/upload" component={Upload} />
        <Route path="/explore" component={Explore} />
    </Router>
  );
}

export default App;
