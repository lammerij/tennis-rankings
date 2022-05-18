import React from "react";
import PlayerCard from "./PlayerCard";

function FavoriteContainer({ favoritedPlayers, updatedFavoriteList }) {
  const favorited = favoritedPlayers.map((player) => {
    return (
      <PlayerCard
        player={player}
        key={player.id}
        updatedFavoriteList={updatedFavoriteList}
      />
    );
  });

  return (
    <div>
      <h2>Favorite Players</h2>
      <div style={{ display: "flex" }}>{favorited}</div>
    </div>
  );
}

export default FavoriteContainer;
