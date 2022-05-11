import React from "react";

function PlayerCard({ player }) {
  const { id, name, ranking, country, favorite } = player;
  return (
    <div style={{border: "solid", width: "300px"}}>
      <h3>Ranking #{player.ranking}</h3>
      <h4>{player.name}</h4>
      <h4>Country: {player.country}</h4>
      <button>Favorite</button>
    </div>
  );
}

export default PlayerCard;
