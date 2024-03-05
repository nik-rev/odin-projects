async function getPokemonData(name) {
  const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemonDataJson = await pokemonData.json();
  const pokemonImage = pokemonDataJson.sprites.front_default;
  return {
    name,
    sprite: pokemonImage,
    clicked: false,
    id: crypto.randomUUID(),
  };
}

export default getPokemonData;
