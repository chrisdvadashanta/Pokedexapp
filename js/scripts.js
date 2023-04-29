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
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function() {
          showDetails(pokemon);
        });
      }

    //executing the Details of the Pokemon
  function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          // console.log(item);
          showModal(pokemon);
        });     
  } 

  function showModal(pokemon) { 
    let modalContainer = document.querySelector('#modal-container');
    pokemonRepository.loadDetails(pokemon).then(function () {

    
    // Clear all existing modal content
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Add the new modal content (including Pokemon data)
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    
    let modalTitle = document.createElement('h1');
    modalTitle.innerText = pokemon.name;
    
    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = 'Height: ' + pokemon.height;

    let pokemonWeight = document.createElement ('p');
    pokemonWeight.innerText = 'Weight: ' + pokemon.weight;

    let pokemonType = document.createElement ('p');
    let arrayType = pokemon.types.map(obj => obj.type.name); 
    let arrayTypeName = arrayType.join();
    pokemonType.innerText = 'Type: ' + arrayTypeName;

    let pokemonImage = document.createElement ('img');
    pokemonImage.src = pokemon.imageUrl;
    pokemonImage.classList.add('pokemon-img');

    
    modal.appendChild(closeButtonElement);
    modal.appendChild(modalTitle);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonType);

    modal.appendChild(pokemonWeight);
    modal.appendChild(pokemonImage);
    modalContainer.appendChild(modal);
    
    modalContainer.classList.add('is-visible');
    });
  
    function hideModal() {
    modalContainer.classList.remove('is-visible');
    }

    //ESC pressed to close Modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });

    //click outside of Modal to close Modal
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
  });

} 




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



