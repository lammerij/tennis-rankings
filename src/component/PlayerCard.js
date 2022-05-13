import React, { useState } from "react";

function PlayerCard({ player }) {
  const [isfavorite, setIsFavorite] = useState(false);
  const { id, name, ranking, country, favorite } = player;

  return (
    <div style={{ border: "solid", width: "400px", background: "lime"}}>
      <h3>Ranking #{player.ranking}</h3>
      <h4>{player.name}</h4>
      <h4>Country: {player.country}</h4>
      <button style={{background: "white"}}>Favorite</button>
    </div>
  );
}

export default PlayerCard;
