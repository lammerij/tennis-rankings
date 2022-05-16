import React from "react";
import PlayerCard from "./PlayerCard";

function FavoriteContainer({favoritePlayer}){
  const favoritePlayersCards = favoritePlayer.map((player) => (
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
