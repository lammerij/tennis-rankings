import React, { useEffect, useState } from "react";
import PlayerList from "./PlayerList";

function PlayerContainer() {
  const[isFavorite, setIsFavorite] = useState([])
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  function handleFavorite(playerToAdd){
    setIsFavorite(...isFavorite, playerToAdd)
  }

  return (
    <div>
      <PlayerList players={players} handleFavorite={handleFavorite} />
    </div>
  );
}

export default PlayerContainer;
