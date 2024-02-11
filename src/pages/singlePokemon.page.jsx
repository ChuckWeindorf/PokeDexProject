import React from "react";
import { useParams } from "react-router-dom";
import {getStoredPokemonData} from '../components/fetchRoutines';
import { Link } from 'react-router-dom';

function SinglePokemon(prop) {
  let { id } = useParams();
  let onePokemon = getStoredPokemonData(id);
  let arrEvolution = getEvolution(onePokemon);
  return (
    <>
    <table className="styled-table">
      <thead>
        <tr>
          <th className="bigName">{onePokemon.name}</th>
          <th><img src={onePokemon.img}></img></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="tdLeftie"><strong>Type of Pokemon:</strong> {onePokemon.type.join(", ")}</td>
          <td className="tdLeftie"><strong>Weaknesses:</strong><br />{onePokemon.weaknesses.join(", ")}</td>
        </tr>
        <tr>
          <td className="tdLeftie"><strong>Candy: </strong>{onePokemon.candy}</td>
          <td className="tdLeftie"><strong>Candy Count: </strong>{onePokemon.candy_count}</td>
        </tr>
        <tr>
          <td className="tdLeftie"><strong>Height: </strong>{onePokemon.height}</td>
          <td className="tdLeftie"><strong>Weight: </strong>{onePokemon.weight}</td>
        </tr>
        <tr>
          <td className="tdLeftie"><strong>Spawn %: </strong>{onePokemon.spawn_chance}</td>
          <td className="tdLeftie"><strong>Spawn Time: </strong>{onePokemon.spawn_time}</td>
        </tr>
        <tr>
          <td className="tdLeftie"><strong>Average Spawns: </strong>{onePokemon.avg_spawns}</td>
          <td className="tdLeftie"><strong>Multipliers: </strong>{onePokemon.multipliers}</td>
        </tr>
        <tr>
          <td className="tdLeftie"><strong>Egg: </strong>{onePokemon.egg}</td>
          <td className="tdLeftie"><strong>ID/Num: </strong>{onePokemon.id}/{onePokemon.num}</td>
        </tr>
        <tr>
          {arrEvolution.map((element, index) => { return ( 
            <td className="tdLeftie" key={"td1" + index}>
            <Link to={`/pokemon/${element.num}`}>Evolves {element.evolve}: {element.name}</Link></td>
            )})}
        </tr>
      </tbody>
    </table>
    </>
  );
}
function getEvolution(pokemon)
  {
    let tmpEV = [];
    if (pokemon.hasOwnProperty("prev_evolution"))
      {
        for (let vint=0; vint < pokemon.prev_evolution.length; vint++)
             {
              let tmpOb = {};
              tmpOb.evolve = "From";
              tmpOb.num = pokemon.prev_evolution[vint].num;
              tmpOb.name = pokemon.prev_evolution[vint].name;
              tmpEV.push(tmpOb)
             }
      }
      
      if (pokemon.hasOwnProperty("next_evolution"))
      {
        for (let vint=0; vint < pokemon.next_evolution.length; vint++)
             {
              let tmpOb = {};
              tmpOb.evolve = "To";
              tmpOb.num = pokemon.next_evolution[vint].num;
              tmpOb.name = pokemon.next_evolution[vint].name;
              tmpEV.push(tmpOb)
             }
      }

    return tmpEV;
  };

export { SinglePokemon };