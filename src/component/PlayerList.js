import React from "react";
import PlayerCard from "./PlayerCard";

function PlayerList({ players, handleFavorite }) {
  const playersCards = players.map((player) => (
    <PlayerCard player={player} key={player.id} handleFavorite={handleFavorite} />
  ));





  return (
    <div style={{background: "white"}}>
      <h2>Players</h2>
      <h3>Click On A Player To Favorite!</h3>
      <div style={{display: "flex"}}>{playersCards}</div>
    </div>
  );
}

export default PlayerList;
