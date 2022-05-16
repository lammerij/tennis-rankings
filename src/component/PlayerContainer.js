import React from "react";
import PlayerCard from "./PlayerCard";


function PlayerContainer({players, updatedFavoriteList }) {
  const playersCards = players.map((player) => (
    <PlayerCard player={player} key={player.id} updatedFavoriteList={updatedFavoriteList} />
  ));

  

  return (
    <div style={{ background: "white" }}>
      <h2>Players</h2>
      <div style={{ display: "flex" }}>{playersCards}</div>
    </div>
  );
}

export default PlayerContainer;
