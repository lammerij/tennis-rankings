import React from 'react'


function PlayerList({player}) {
  console.log(player)
  const {id, ranking, name, image, country} = player

  return (
    <div>PlayerList</div>
  )
}

export default PlayerList