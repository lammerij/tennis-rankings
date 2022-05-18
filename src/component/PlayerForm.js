import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PlayerForm({ setPlayers }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [ranking, setRanking] = useState("");
  const [country, setCountry] = useState("");

  // trim removes white space from both ends of a string

  // some checks the value of true/false

  function handleSubmit(event) {
    event.preventDefault();
    if ([name, ranking, country].some((value) => value.trim() === "")) {
      alert("Please Fill Out Form, Thank You!");
      return null;
    }

    const newPlayer = { name, ranking, country };

    fetch("http://localhost:3001/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newPlayer, favorite: false }),
    })
    .then((response) => response.json())
    .then(newPlayer => setPlayers((players)=>{
      return [...players, newPlayer]
    }))

    setName("");
    setRanking("");
    setCountry("");
    history.push("/players");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ background: "lime" }}>
          Name:
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            name="name"
            placeholder="Type Text Here..."
          ></input>
        </label>
        <label style={{ background: "lime" }}>
          Ranking:
          <input
            onChange={(event) => setRanking(event.target.value)}
            type="text"
            name="ranking"
            placeholder="Enter Number Here..."
          ></input>
        </label>
        <label style={{ background: "lime" }}>
          Country:
          <input
            onChange={(event) => setCountry(event.target.value)}
            type="text"
            name="country"
            placeholder="Type Text Here..."
          ></input>
        </label>
        <button style={{ background: "white" }}>Add Player!</button>
      </form>
      <img src="/images/Player List Background.jpeg"></img>
    </div>
  );
}

export default PlayerForm;
