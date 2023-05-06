let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  //add a Pokemon and check for the input
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }

  //display the whole repository
  function getAll() {
    return pokemonList;
  }
  //add a pokemon to the website as a button and log details to console
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add("list-group-item")
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add('btn');
    button.classList.add('btn-outline-primary');
    button.classList.add('btn-block');
    button.setAttribute("type", "button")
    button.setAttribute("data-target", "#exampleModal")
    button.setAttribute("data-toggle", "modal")
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  //executing the Details of the Pokemon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    modalTitle.empty();
    modalBody.empty();

    modalName = $("<h1>" + pokemon.name + "</h1>")
    let image = $('<img class="modal-img" style="width:50%">');
    image.attr("src", pokemon.imageUrl);
    let pokemonHeight = $("<p>" + "Height: " + pokemon.height + "</p>");
    let pokemonWeight = $("<p>" + "Weight: " + pokemon.weight + "</p>");
    let arrayType = pokemon.types.map(obj => obj.type.name);
    let arrayTypeName = arrayType.join();
    let pokemonType = $("<p>" + "Type: " + arrayTypeName + "</p>");

    modalTitle.append(modalName);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonType);
    modalBody.append(pokemonWeight);
    modalBody.append(image);
  };


  //Loding the List of the API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        // console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  //loading the Details of the API List
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };

})();

// forEach to display Pokemon

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});



