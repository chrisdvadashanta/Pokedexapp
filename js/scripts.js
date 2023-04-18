let pokemonRepository = (function () {
    let repository = [
        {
            name: 'Charizard',
            hight: 1.7,
            weight: 90.5,
            types: ['fire', 'flying']
        },
        {
            name: 'Hypno',
            hight: 1.6,
            weight: 75.6,
            types: ['psychic'],
        },
        {
            name: 'Chansey',
            hight: 1.1,
            weight: 34.6,
            types: ['normal'],
        },
        {
            name: 'Pichu',
            hight: 0.3,
            weight: 2,
            types: ['electric'],
        },
    ];

    //add a Pokemon and check for the input
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    };

    //display the whole repository
    function getAll() {
        return repository;
    };
    //add a pokemon to the website as a button and log details to console
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("pokemonbutton");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function (){showDetails(pokemon) });
    }

    function showDetails(pokemon) {
        console.log(pokemon.name);
    };


    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    };

})();


console.log(pokemonRepository.getAll());

//forEach to display Pokemon and their hight
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});


