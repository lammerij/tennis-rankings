import React from "react";

function PlayerCard({ player, updatedFavoriteList }) {
  // console.log(player);
  const { id, name, country, ranking, favorite } = player;

  //PATCH, onClick

  function handleFavoriteClick() {
    fetch(`http://localhost:3001/players/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "favorite": !favorite
      })
    })
    .then((response) => response.json())
    .then(updatedFavoriteList)
  }


  return (
    <div style={{ border: "solid", width: "400px", background: "lime" }}>
      <h3>Ranking #{ranking}</h3>
      <h4>{name}</h4>
      <h4>{country}</h4>
      <button onClick={handleFavoriteClick} style={{ background: "white" }}>
        {favorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
}

export default PlayerCard;
