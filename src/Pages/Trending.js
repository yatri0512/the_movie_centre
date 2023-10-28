import React, { useState, useEffect } from "react";
import { Whatshot } from "@mui/icons-material";
export const img_300 = 'https://image.tmdb.org/t/p/w300';
export const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';
const Trending = () => {
   const [isCompleteScreen, setIsCompleteScreen] = useState(false);
   const [movie, setMovie] = useState([]);
   const [tv, setTv] = useState([]);
   const fetchTrendingMovie = async () => {
      const movies = await fetch(
         `https://api.themoviedb.org/3/trending/movie/day?api_key=f982499e3a554ab1e87427f63fb08db6`
      );
      const dataJ1 = await movies.json();
      setMovie(dataJ1.results);
   };
   const fetchTrendingTv = async () => {
      const TV = await fetch(
         `https://api.themoviedb.org/3/trending/tv/day?api_key=f982499e3a554ab1e87427f63fb08db6`
      );
      const dataJ2 = await TV.json();
      setTv(dataJ2.results);
   };
   useEffect(() => {
      fetchTrendingMovie();
      fetchTrendingTv();
   }, []);
   return (
      <>
         <div className="head-container">
            <Whatshot style={{ color: "orangered" }} />
            <span> Trending Today </span>
            <Whatshot style={{ color: "orangered" }} /><br />
            <button
               className={`btn ${isCompleteScreen === false && 'active1'}`}
               onClick={() => setIsCompleteScreen(false)}>
               Movie
            </button>
            <button
               className={`btn ${isCompleteScreen === true && 'active1'}`}
               onClick={() => setIsCompleteScreen(true)}>
               Tv Series
            </button>
         </div>
         <div id="card">
            {isCompleteScreen === false && (movie.map((Val) => {
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
                  <div key={id} className="trending-card" style={{ position: "relative" }}>
                     <div key={id} className='movie-card'>
                        <img src={poster_path ? `${img_300}/${poster_path}` : unavailable} alt="" />
                        <div>
                           <h3>{title || name}</h3>
                           <div style={{ display: 'flex' }}>
                              <div style={{ float: "left", marginRight: "42%" }}>{first_air_date || release_date}</div>
                              <div
                                 style={{
                                    float: "right", padding: "5px",
                                    border: "1px solid rgb(91,91,91)", backgroundColor: "rgb(71, 71, 71)"
                                 }}>
                                 {vote_average}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="overview">
                        <span>{overview}</span>
                     </div>
                  </div>
               )
            }))}
            {isCompleteScreen === true && (tv.map((Val) => {
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
                     <div key={id} className="movie-card">
                        <img src={poster_path ? `${img_300}/${poster_path}` : unavailable} alt="" />
                        <div>
                           <h3>{title || name}</h3>
                           <div style={{ display: 'flex' }}>
                              <div style={{ float: "left", marginRight: "42%" }}>{first_air_date || release_date}</div>
                              <div
                                 style={{
                                    float: "right", padding: "5px",
                                    border: "1px solid rgb(91,91,91)", backgroundColor: "rgb(71, 71, 71)"
                                 }}>
                                 {vote_average}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="overview">
                        <span>{overview}</span>
                     </div>
                  </div>
               );
            }))}

         </div>
      </>
   );
};

export default Trending;
