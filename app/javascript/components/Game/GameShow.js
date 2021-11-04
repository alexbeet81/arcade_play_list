import React from 'react';
import { useParams } from 'react-router';

import ReactPlayer from "react-player";


const GameShow = (props) => {
  const gameInfo = useParams();
  const selectedGame = props.games.find(game => game.id === +gameInfo.id)

  console.log(selectedGame, "selectedGame line 11")

  // in return method, ittrate through variable from use state
  // find how to pass the params via this route
  return (
    <div>
      <div className="game_show__name">{selectedGame.name}</div>
    </div>
  )
};

export default GameShow;
