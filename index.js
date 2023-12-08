function searchPokemon(id) {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  return fetch(`${URL}${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => alert("porfavor introdusca un nombre o numero valido"));
}
function updatePokemon(pokemon) {
  window.pokeImage.setAttribute("src", pokemon.sprites.front_default);
  window.pokeName.textContent = pokemon.name;
}

async function init() {
  const firstPokemon = await searchPokemon(25);
  updatePokemon(firstPokemon);
}
init();

window.pokeButton.addEventListener("click", async function () {
  if (window.pokeText.value === "") {
    alert("porfavor, ingrese el numero del pokemon que desea buscar");
  } else if (window.pokeText.value > 898) {
    alert("porfavor ingrese un pokemon existente");
  } else {
    const pokemon = await searchPokemon(window.pokeText.value);
    updatePokemon(pokemon);
  }
});
