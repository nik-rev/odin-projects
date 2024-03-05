import { useState, useEffect } from "react";
import "./App.css";
import SelectDifficulty from "../SelectDifficulty/SelectDifficulty";
import pokemonNames from "../../data/pokemonNames";
import getPokemonData from "../../utils/getPokemonData";
import Game from "../Game/Game";
import difficulties from "../../data/difficulties";

function App() {
  const [gameCards, setGameCards] = useState();
  const [gameOver, setGameOver] = useState(false);
  const pokemonArray = pokemonNames.map((name) => getPokemonData(name));

  // The player has picked a mode
  if (Array.isArray(gameCards)) {
    const gameScore = gameCards.filter(({ clicked }) => clicked).length;
    if (gameOver) {
      return (
        <h1>
          Game over! You {gameScore === gameCards.length ? "won" : "lost"}. Score:{" "}
          {gameScore}
        </h1>
      );
    }
    return (
      <Game
        gameCards={gameCards}
        setGameCards={setGameCards}
        setGameOver={setGameOver}
        score={gameScore}
      />
    );
  }

  return (
    <>
      {Object.entries(difficulties).map(([difficultyName, cardCount]) => {
        return (
          <SelectDifficulty
            key={difficultyName}
            name={difficultyName}
            cardCount={cardCount}
            setGameCards={setGameCards}
            pokemonArray={pokemonArray}
          />
        );
      })}
    </>
  );
}

export default App;
