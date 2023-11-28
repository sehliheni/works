import React from 'react'
import Name from './Name';
import { players } from './data';
const Playerlist = ({players}) => {
return (
    <div className="cardplay">
    {players.map((players) => (
      <Name  players={players} />
    ))}
  </div>
);
}

export default Playerlist
