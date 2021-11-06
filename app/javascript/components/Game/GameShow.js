import React from 'react';
import { useParams } from 'react-router';

import ReactPlayer from "react-player";


const GameShow = (props) => {
  const gameInfo = useParams();
  const selectedGame = props.games.find(game => game.slug === gameInfo.id)

  console.log(selectedGame);
  console.log(selectedGame.multiplayer_modes)
  // in return method, ittrate through variable from use state
  // find how to pass the params via this route
  return (
    <div>
      <div className="game_show__name">{selectedGame.name}</div>
      <div className="game_show__release_date">{selectedGame.release_date}</div>
      {selectedGame.platforms.map((plat, index) => {
        return (
          <div key={index}>{plat.name}</div>
        )
      })}
      <div>{selectedGame.summary}</div>
      <div>{selectedGame.rating}</div>
      {selectedGame.genres.map((genre, index) => {
        return (
          <div key={index}>{genre.name}</div>
        )
      })}
      <div>{selectedGame.player_perspectives[0].name}</div>
      <button type="button">Cancel</button>
      <button type="button">Add</button>
    </div>
  )
};

export default GameShow;
