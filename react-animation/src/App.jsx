import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AttentionSeeker  } from "react-awesome-reveal";
function App() {
  return (
    <div className="App">
      <AttentionSeeker effect="heartBeat" cascade>
        <ul>
          <li>I enter first...</li>
          <li>...then comes my turn...</li>
          <li>...and finally you see me!</li>
        </ul>
      </AttentionSeeker>
    </div>
  );
}

export default App;
