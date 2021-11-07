import React from 'react';
import { useParams } from 'react-router';
import './GameShow.css';
import ReactPlayer from "react-player/youtube";


const GameShow = (props) => {
  const gameInfo = useParams();
  const selectedGame = props.games.find(game => game.slug === gameInfo.id)
  const bannerImage = selectedGame.screenshots[0].image_id
  console.log(selectedGame.screenshots);

  console.log(selectedGame.platforms.length, "generes length")
  
  // in return method, ittrate through variable from use state
  // find how to pass the params via this route
  return (
    <div className="game_show__container">
      <div className="game_show__card">
        <div className="game_show__banner">
          <img src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${bannerImage}.jpg`}/>
          <div className="game_show__name">{selectedGame.name}</div>
        </div>
        <div className="game_show__release_date_container">
          <div className="game_show__release_date_title">Release date: </div>
          <div className="game_show__release_date">{selectedGame.release_date}</div>
        </div>
        <div className="game_show__platform_container">
          <div className="game_show__platform_title">Platform: </div>
          {selectedGame.platforms.map((plat, index) => {
            console.log(index, "index number");
            return (
              <div className="game_show__platform" key={index}>{plat.name}</div>
            )
          })}
        </div>
        <div>{selectedGame.summary}</div>
        <div>{selectedGame.rating}</div>
        {selectedGame.genres.map((genre, index) => {
          return (
            <div key={index}>{genre.name}</div>
          )
        })}
        <div>{selectedGame.player_perspectives[0].name}</div>
        <div>co-op: {selectedGame.coop}</div>
        <div className="row">
          {selectedGame.screenshots.map((shot, index) => {
            return (
              <div className="column">
                <img key={index} src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${shot.image_id}.jpg`}/>
              </div>
            )
          })}
        </div>
        <div className="game_show__video">
          {selectedGame.videos[0].image_id !== false && <ReactPlayer url={`https://www.youtube.com/watch?v=${selectedGame.videos[0].video_id}`} />}
        </div>
        <button type="button">Cancel</button>
        <button type="button">Add</button>
      </div>
    </div>
  )
};

export default GameShow;
