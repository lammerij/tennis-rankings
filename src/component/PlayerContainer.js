import React, { useEffect, useState } from "react";
import PlayerList from "./PlayerList";
import PlayerFilter from "./PlayerFilter"

function PlayerContainer() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);


  return (
  
  <div>
    <PlayerList players={players}/>
    {/* <PlayerFilter/> */}
  </div>

  )
}

export default PlayerContainer;
