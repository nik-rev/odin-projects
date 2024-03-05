import "./SelectDifficulty.css";
import shuffle from "../../utils/shuffle";

function SelectDifficulty({ name, cardCount, setGameCards, pokemonArray }) {
  async function handleClick() {
    const myPromises = await Promise.all(pokemonArray)
    const slicedPokemonArray = shuffle(myPromises.slice(0, cardCount));
    setGameCards(slicedPokemonArray);
  }

  return (
    <button type="button" onClick={handleClick}>
      {name} {cardCount}
    </button>
  );
}

export default SelectDifficulty;
