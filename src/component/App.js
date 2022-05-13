import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import PlayerContainer from "./PlayerContainer";
import PlayerForm from "./PlayerForm";
import Home from "./Home";
import PlayerFilter from "./PlayerFilter";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Header />
        <Switch>
          <Route exact path="/players">
            <PlayerContainer />
          </Route>
          <Route exact path="/players/new">
            <PlayerForm />
          </Route>
          <Route exact path="/players/favoriteplayers">
            <PlayerFilter />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
