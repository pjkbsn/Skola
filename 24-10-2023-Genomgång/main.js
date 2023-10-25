let url = "https://majazocom.github.io/Data/pokemons.json";



/* function fetchPokemonData(pokemon) {
    fetch(pokemon).then((response) => response.json())
        .then(data => console.log(data))
}

fetchPokemonData(url); */



function fetchPokemonData(adress) {

    const nameList = document.querySelector(`#output`);

    fetch(adress).then((response) => response.json())
        .then(data => {
            data.map((pokemon) => {
                const listItem = document.createElement(`li`);
                listItem.textContent = pokemon.name;
                nameList.appendChild(listItem);

            });
        })

}

fetchPokemonData(url);