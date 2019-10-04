
import React from "react";
import PlayerCard from "./PlayerCard";
function PlayerList({ players }) {
    return (
        console.log(players),
      <section className="player-list">
        {players.map( player => (
          <PlayerCard 
            key={player.id} 
            name={player.name} 
            country={player.country}
            searches={player.searches}
          />
        ))}
      </section>
    )
  }
export default PlayerList;