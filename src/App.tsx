import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import GuessedWords from "./components/Jotto/GuessedWords";
import Congrats from "./components/Jotto/Congrats";
import Input from "./components/Jotto/Input";

function App() {
  return (
    <div data-test="app-component" className="container">
      <h2>Counter</h2>
      <Counter />
      <h2>Jotto</h2>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
      <Input />
    </div>
  );
}

export default App;