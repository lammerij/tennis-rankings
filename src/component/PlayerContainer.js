import React, { useEffect, useState } from "react";
import PlayerList from "./PlayerList";

function PlayerContainer() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/players")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  // const listOfPlayers = players.map((player) => {
  //   <PlayerList player={player} key={player.id} />;
  // });

  return <div>PlayerContainer</div>;
}

export default PlayerContainer;
