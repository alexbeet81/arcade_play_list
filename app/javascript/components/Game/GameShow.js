import React from 'react';
import { useParams } from 'react-router';
import './GameShow.css';
import ReactPlayer from "react-player/youtube";


const GameShow = (props) => {
  const gameInfo = useParams();
  const selectedGame = props.games.find(game => game.slug === gameInfo.id)
  const bannerImage = selectedGame.screenshots[0].image_id

  // set the name of the platforms into a string.
  let platform = '';
  selectedGame.platforms.forEach((plat, index) => {
    if ((selectedGame.platforms.length - 1) === index) {
      platform += plat.name;
    } else {
      platform += `${plat.name}, `;
    }
  });

  // set the name of the genre into a string.
  let genre = '';
  selectedGame.genres.forEach((gen, index) => {
    if ((selectedGame.genres.length - 1) === index) {
      genre += gen.name
    } else {
      genre += `${gen.name}, `
    }
  });

  // set the name of the perspective
  let perspective = '';
  selectedGame.player_perspectives.forEach((per, index) => {
    if ((selectedGame.player_perspectives.length - 1) === index) {
      perspective += per.name;
    } else {
      perspective += `${per.name}, `
    }
  });
  
  // in return method, ittrate through variable from use state
  // find how to pass the params via this route
  return (
    <div className="game_show__container">
      <div className="game_show__card">
        <div className="game_show__banner">
          <img src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${bannerImage}.jpg`}/>
          <div className="game_show__name">{selectedGame.name}</div>
          {selectedGame.rating !== 'NaN' && <div className="game_show__rating">{selectedGame.rating}</div>}
        </div>
        <div className="game_show__release_date_container">
          <div className="game_show__release_date_title">Release date: </div>
          <div className="game_show__release_date">{selectedGame.release_date}</div>
        </div>
        <div className="game_show__platform_container">
          <div className="game_show__platform_title">{selectedGame.platforms.length > 1 ? "Platforms: " : "Platform: " }</div>
          <div className="game_show__platform">{platform}</div>
        </div>
        <div className="game_show__genre_container">
          <div className="game_show__genre_title">Genre: </div>
          <div className="game_show__genre">{genre}</div>
        </div>
        <div className="game_show__player_perspective_container">
          <div className="game_show__player_perspective_title">Player perspective: </div>
          <div className="game_show__player_perspective">{perspective}</div>
        </div>
        <div className="game_show__coop_container">
          <div className="game_show__coop_title">co-op: </div>
          <div className="game_show__coop">{selectedGame.coop}</div> 
        </div>
        <div className="game_show__summary_container">
          <div className="game_show__summary_title">Summary: </div>
          <div className="game_show__summary">{selectedGame.summary}</div>
        </div>
        <div className="game_show__screenshots_container">
          <div className="row">
            {selectedGame.screenshots.map((shot, index) => {
              return (
                <div className="column">
                  <img key={index} src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${shot.image_id}.jpg`}/>
                </div>
              )
            })}
          </div>
        </div>
        <div className="game_show__video">
          {selectedGame.videos[0].image_id !== false && <ReactPlayer url={`https://www.youtube.com/watch?v=${selectedGame.videos[0].video_id}`} />}
        </div>
        <div className="game_show__buttons">
          <button className="game_show__cancel" type="button">Cancel</button>
          <button className="game_show__add" type="button">Add</button>
        </div>
      </div>
    </div>
  )
};

export default GameShow;
