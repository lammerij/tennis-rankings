import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar"
import PlayerContainer from "./PlayerContainer"


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Header />
        <Switch>
          <Route path="/players">
            <PlayerContainer/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
