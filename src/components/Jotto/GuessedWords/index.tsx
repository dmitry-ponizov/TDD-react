import React from "react";
import { IGuessedWord } from "./types";

const GuessedWords: React.FC<IGuessedWord> = ({ guessedWords }) => {
  return (
    <div data-test="component-guessed-words">
      {!guessedWords.length ? (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      ) : (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word: any, index: number) => (
                <tr data-test="guessed-word" key={index}>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GuessedWords;
