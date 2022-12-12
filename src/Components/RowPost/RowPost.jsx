import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../../axios";
import { API_KEY, baseUrl, image_url } from "../../Constants/constants";
import "./RowPost.css";
function RowPost(props) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [ytId, newYtId] = useState("");
  function trailer(id) {
    console.log(id);
    axios
      .get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((link) => {
        if (link.data.results.length !== 0) {
          newYtId(link.data.results[0].key);
          console.log(link.data.results[0].key);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [movies, newMovies] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}${props.url}`).then((e) => {
      console.log(e.data.results);
      console.log("he");
      newMovies(e.data.results);
    });
  }, []);
  return (
    <div>
      <div className="row">
        <h2 className="title">{props.title}</h2>
        <div className="moviecards">
          {movies.map((obj) => (
            <img
              onClick={() => trailer(obj.id)}
              className="movies"
              src={`${image_url}${obj.poster_path}`}
              alt=""
            />
          ))}
        </div>
      </div>
      {ytId && <YouTube className="youtube" opts={opts} videoId={ytId} />}
    </div>
  );
}

export default RowPost;
