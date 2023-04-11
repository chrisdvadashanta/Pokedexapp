let pokemonList = [
{
    name:'Charizard',
    hight:1.7,
    weight:90.5,
    types:['fire','flying']
},
{   
    name:'Hypno',
    hight:1.6,
    weight:75.6,
    types:['psychic'],
},
{
    name:'Chansey',
    hight:1.1,
    weight:34.6,
    types:['normal'],
},
{
    name:'Pichu',
    hight:0.3,
    weight:2,
    types:['electric'],
},
];

//Loop to display Pokemon and their hight
for (let i=0 ; i < pokemonList.length ; i++ ){
    if (pokemonList[i].hight > 1.6){
        document.write( '<p>' + pokemonList[i].name+ ' : '+ '<p>'+ 'hight: ' + pokemonList[i].hight +' - ' +  'Wow, that\'s big!')
    } 
    else {
        document.write('<p>' + pokemonList[i].name+ ' : ' + '<p>'+ 'hight: ' +  pokemonList[i].hight)
    }
}
