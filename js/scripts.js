let pokemonList = [
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

//forEach to display Pokemon and their hight
pokemonList.forEach(function (pokemonList) {
    if (pokemonList.hight > 1.6) {
        document.write('<p>' + pokemonList.name + ' : ' + 'hight - ' + pokemonList.hight + ' - ' + 'Wow, that\'s big!')
    }
    else {
        document.write('<p>' + pokemonList.name + ' : ' + 'hight -' + pokemonList.hight)
    }
})

let pokemonRepository = (function () {
    let pokemonList = []
    function add(pokemon) {
        if (typeof === "") {
            pokemonList.push(pokemon)
        }
    };
    function getall() {
        return pokemonList
    };
    return {
        add: add,
        getall: getall,
    };

})();

