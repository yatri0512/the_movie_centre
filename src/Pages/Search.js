import React, { useState, useEffect } from "react";
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const unavailable =
   "https://www.movienewz.com/img/films/poster-holder.jpg";
const Search = () => {
   const [searchText, setSearchText] = useState("");
   const [content, setContent] = useState([]);

   const fetchSearch = async () => {
      const data = await fetch(
         `https://api.themoviedb.org/3/search/multi?api_key=f982499e3a554ab1e87427f63fb08db6&language=en-US&query=${searchText}&include_adult=false`
      );
      const { results } = await data.json();
      setContent(results);
   };
   useEffect(() => {
      fetchSearch();
   });

   const Trigger = (e) => {
      setSearchText(e.target.value);
   };

   return (
      <>
         <div className="head-container">
            <input
               type="text"
               placeholder="Search..."
               className="searching"
               onChange={Trigger}
            />
         </div>
         <div id="card">
            {content &&
               content.map((Val) => {
                  const {
                     name,
                     title,
                     poster_path,
                     first_air_date,
                     release_date,
                     media_type,
                     vote_average,
                     overview,
                     id,
                  } = Val;
                  return (
                     <div
                        key={id}
                        className="trending-card" style={{position: "relative"}}>
                        <div key={id} className='movie-card'>
                           <img
                              src={
                                 poster_path
                                    ? `${img_300}/${poster_path}`
                                    : unavailable
                              }
                              alt=""
                           />
                           <div>
                              <h3>{title || name}</h3>
                              <div>
                                 {media_type === "tv" ? "TV" : "Movie"}
                              </div>
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
               })}

         </div>
      </>
   );
};

export default Search;
