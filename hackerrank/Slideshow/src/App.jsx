import React from "react";

import Slides from "./components/Slides";
import { SLIDES_DATA } from "./constants/SLIDES_DATA";

import "./App.css";

function App() {
  return (
    <>
      <h1 header="Slideshow App"></h1>
      <div className="App">
        <Slides slides={SLIDES_DATA} />
      </div>
    </>
  );
}

export default App;
