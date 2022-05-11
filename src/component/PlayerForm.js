import React from "react";

function PlayerForm() {
  return (
    <form>
      <h1>Add Player</h1>
      <input
        type="text"
        name="Player Name"
        ranking="Ranking"
        country="Country"
        image="Url"
      />
    </form>
  );
}

export default PlayerForm;
