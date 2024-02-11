import {useState, useEffect} from 'react';

//Global Pokemon Object
//temp copy os service response
let realPokemon = {};

function fetchRoutines() {

    let [listPokemon, setList] = useState([]);
      
        useEffect(() => { getPokemon([])}, []);
      
        function getPokemon() {
      //    console.log("Get Pokemon now");
          fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
            .then((response) => {
      //        console.log(response);
              return response.json();
            })
            .then((data) => {
      //        console.log(data);
              setList(data);
            })
            .catch(console.error);
        }

        realPokemon = listPokemon;
  return realPokemon;
}

function getStoredPokemonData(pokeNum)
{
  if (!pokeNum) {return realPokemon.pokemon}
  else
    { 
//    console.log(pokeNum);
    let tmpPokemon = {};
    for (let vint=0; vint < realPokemon.pokemon.length; vint++)
       {
        if (realPokemon.pokemon[vint].num == pokeNum)
            {tmpPokemon = realPokemon.pokemon[vint]}
       }
    return tmpPokemon
    }
};

export {fetchRoutines, getStoredPokemonData}