import React from "react";
import PlayerCard from "./PlayerCard";

function PlayerList({ players }) {
  const playersCards = players.map((player) => (
    <PlayerCard player={player} key={player.id} />
  ));

  return (
    <div>
      <h2>Players</h2>
      <div style={{display: "flex", flexWrap: "wrap"}}>{playersCards}</div>
    </div>
  );
}

export default PlayerList;
