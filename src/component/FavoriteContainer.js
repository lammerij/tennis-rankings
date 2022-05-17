import React from "react";
import PlayerCard from "./PlayerCard";

function FavoriteContainer({favoritedPlayer}){
  const favoritePlayersCards = favoritedPlayer.map((player) => (
    <PlayerCard player={player} key={player.id} />
  ));


  


  return ( 
    <div>
    <h2>Favorite Players</h2>
    <div>{favoritePlayersCards}</div>
    
    </div>
  )
}

export default FavoriteContainer;
