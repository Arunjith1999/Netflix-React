import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import axios from "axios";
import { useState } from "react";
import React from "react";
import "./App.css";
import { originals, action, comedy, crime } from "./urls";

function App() {
  const [state, newState] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost title="Netflix Originals" url={originals} img="backdrop_path" />
      <RowPost title="Actions" url={action} img="poster_path" />
      <RowPost title="Comedy" url={comedy} img="poster_path" />
      <RowPost title="Crime" url={crime} img="poster_path" />
      <RowPost title="Drama" url={crime} img="poster_path" />
    </div>
  );
}

export default App;
