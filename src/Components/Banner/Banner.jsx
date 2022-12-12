import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, baseUrl, image_url } from "../../Constants/constants";
function Banner() {
  const [movie, setMovie] = useState();
  const [newmovie,setNewMovie] = useState(1)

  useEffect(() => {
    axios
      .get(`${baseUrl}/trending/movie/week?api_key=${API_KEY}`)
      .then((value) => {
        console.log(value.data.results);
        const uniqurenumber = Math.floor(Math.random() * 20);
        setMovie(value.data.results[uniqurenumber]);
      });
    },[]);
  return (
    
    <>
    
    <div
      style={{
        backgroundImage: `url(${movie ? image_url + movie.backdrop_path : ""})`,
      }}
      className="Banner"
    >
 
      <div className="content">
        <h1 className=" bannerTitle">{movie ? movie.title : ""}</h1>
        <div className="bannerButton">
          <button className="button">Play</button>
     
          <button className="button">MyList</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
      
    </div>
   
    </>
  );
}

export default Banner;
