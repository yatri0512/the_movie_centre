import React, { useState, useEffect } from 'react'
import Genre from '../Components/Genre';
import useGenre from '../useGenre';
export const img_300 = 'https://image.tmdb.org/t/p/w300';
export const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';
const Movies = () => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState([]);
  const genreURL = useGenre(value);

  const fetchTrendingMovie = async () => {
    const data = await fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=f982499e3a554ab1e87427f63fb08db6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`);
    const dataJ = await data.json();
    setState(dataJ.results);
  };
  useEffect(() => {
    fetchTrendingMovie();
  });

  return (
    <>
      <div className="head-container">
        <span> Movies </span>
        <Genre
          genre={genre}
          setGenre={setGenre}
          setPage={setPage}
          type="tv"
          value={value}
          setValue={setValue}
        />
      </div>
      <div id='card'>
        {state.map((Val) => {
          const {
            name,
            title,
            poster_path,
            first_air_date,
            release_date,
            vote_average,
            overview,
            id,
          } = Val;
          return (
            <div key={id} className="trending-card" style={{position: "relative"}}>
              <div key={id} className='movie-card'>
                <img src={poster_path ? `${img_300}/${poster_path}` : unavailable} alt="" />
                <div>
                  <h3>{title || name}</h3>
                  <div style={{display: 'flex'}}>
                    <div style={{float: "left", marginRight: "45%"}}>{first_air_date || release_date}</div>
                    <div 
                      style={{float: "right", padding: "5px", 
                      border: "1px solid rgb(91,91,91)", backgroundColor: "rgb(71, 71, 71)"}}>
                      {vote_average}
                    </div>
                  </div>
                </div>
              </div>
              <div  className="overview">
                <span>{overview}</span>
              </div>
            </div>
          );
        })}
        
      </div>
    </>
  )
}

export default Movies
