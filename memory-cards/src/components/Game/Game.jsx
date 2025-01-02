import "./Game.css";
import shuffle from "../../utils/shuffle";

function Game({ gameCards, setGameCards, setGameOver, score }) {
  const cards = gameCards.map((card) => {
    function handleClick() {
      const changedClicked = structuredClone(gameCards).map((cardClone) => {
        return cardClone.name === card.name
          ? { ...cardClone, clicked: true }
          : cardClone;
      });
      // If all cards have been clicked or a card has been clicked again
      const gameOver =
        JSON.stringify(changedClicked) === JSON.stringify(gameCards) ||
        changedClicked.filter(({ clicked }) => {
          return clicked;
        }).length === gameCards.length;
      setGameOver(gameOver);
      setGameCards(shuffle(changedClicked));
    }
    return (
      <button type="button" onClick={handleClick} key={card.id}>
        <img src={card.sprite} alt={card.name.concat(" sprite")} />
        <p>{card.name}</p>
      </button>
    );
  });
  return (
    <>
      {cards} <h1>Score: {score}</h1>
    </>
  );
}

export default Game;
