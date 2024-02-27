import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondaryEmotion, setSecondaryEmotion] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`The secondary emotion is ${secondaryEmotion}`);
  }, [secondaryEmotion])

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
      </button>
      <button
        onClick={() => setEmotion("excited")}
      >
        Excited
      </button>
      <h2> Secondary emotion is {secondaryEmotion}</h2>
      <button onClick={() => setSecondaryEmotion('grateful')}>Grateful</button>

    </div>
  );
}

export default App;
