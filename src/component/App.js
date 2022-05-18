import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import PlayerContainer from "./PlayerContainer";
import PlayerForm from "./PlayerForm";
import Home from "./Home";
import FavoriteContainer from "./FavoriteContainer";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  function updatedFavoriteList(favoritePlayer) {
    setPlayers(
      players.map((player) => {
        if (favoritePlayer.id === player.id) {
          return favoritePlayer;
        } else {
          return player;
        }
      })
    );
  }

  const favoritedPlayers = players.filter((player) => {
    return player.favorite;
  });

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Header />
        <Switch>
          <Route exact path="/players">
            <PlayerContainer
              players={players}
              updatedFavoriteList={updatedFavoriteList}
            />
          </Route>
          <Route exact path="/players/new">
            <PlayerForm setPlayers={setPlayers} />
          </Route>
          <Route exact path="/players/favoriteplayers">
            <FavoriteContainer
              favoritedPlayers={favoritedPlayers}
              updatedFavoriteList={updatedFavoriteList}
            />
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
