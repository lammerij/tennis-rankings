import React from "react";
import PlayerCard from "./PlayerCard";

function FavoriteContainer({favoritedPlayers, updatedFavoriteList}){
  const favoritePlayersCards = favoritedPlayers.map((player) => (
    <PlayerCard player={player} key={player.id} updatedFavoriteList={updatedFavoriteList} />
  ));


  


  return ( 
    <div>
    <h2>Favorite Players</h2>
    <div style={{ display: "flex" }}>{favoritePlayersCards}</div>
    
    </div>
  )
}

export default FavoriteContainer;
