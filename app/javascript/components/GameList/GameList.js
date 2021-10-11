import React from 'react';
import './GameList.css';
import axios from 'axios';

const GameList = () => {
  // call api and get a list of games.
  // use axios to do call.

  // const searchGameHandler = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  //   axios({
  //     url: "https://api.igdb.com/v4/games",
  //     method: 'POST',
  //     headers: {
  //         'Accept': 'application/json',
  //         'Client-ID': 'kbfk11t8q6lb33clzkf074fflfrk2b',
  //         'Authorization': 'Bearer 0r29zp7b8uwswd6rjed08svor0h0jf',
  //     },
  //     data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
  //   })
  //     .then(response => {
  //         console.log(response.data);
  //     })
  //     .catch(err => {
  //         console.error(err);
  //     });
  // }

  const searchGameHandler = (event) => {
    event.preventDefault();
    axios(`https://www.giantbomb.com/api/games/?api_key=af926dff67c16cd52bc4feffa6372f7b760ca93a&format=json`, {

    })
      .then(response => console.log(response))
      .catch(response => console.log(response))    
  };

  

  // useState and save result into an array

  // map over array and create a div for each entry

  // place div into return statement.

  return (
    <div>
      <div className="search_bar">
        <form onSubmit={searchGameHandler}>
          <input type="text" placeholder="search" />
        </form>
      </div>
    </div>
  )
};

export default GameList;

