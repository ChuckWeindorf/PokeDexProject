import {useState} from "react";
import {fetchRoutines, getStoredPokemonData} from '../components/fetchRoutines';
import oldFashionedTable from '../components/oldFashionedTable';
import { siftPokemon, setPickLists, filterArray} from '../components/objectBoiler';


function HomePage(props)
 {
  let [searchType, setSearchType] = useState("");
  let [searchWeaknesses, setSearchWeaknesses] = useState("");
  let [searchName, setSearchName] = useState("");
  let bigList = {};
  let arrType = [];
  let arrWeaknesses = [];
  let arrShortList = [];
  
  bigList = fetchRoutines();

  //
  if ( bigList != null) 
     {
     const newPokemon = siftPokemon(bigList.pokemon);
//     console.log("newPokemon", newPokemon);
     arrShortList = filterArray(newPokemon, searchName, searchType, searchWeaknesses);
//     console.log("Short", arrShortList);
     [arrType, arrWeaknesses] = setPickLists(bigList);
     }

  return (
    <>
      <div>
        <h1>Chuck's Pokedex</h1>
      </div>
      <div>
        <table><tbody>
          <tr>
            <td width="250">
              <label htmlFor="nameSearch">Search: </label>
              <input type="text" 
                 id="nameSearch" 
                 size="10"
                 onChange={(e) => setSearchName(e.target.value)}  >
                 </input>
                 </td>
            <td width="200">
              <label>Filter by Type: </label>
              <select id="typeSel" 
                        name="typeSel" 
                        onChange={(e) => setSearchType(e.target.value)} 
                        value={searchType} >
                        <option value="">All</option>
                        {arrType.map((type, index) => { return (
                           <option key={type+index} 
                                   value={type}>{type}</option>)})}
                </select> 
             </td>
             <td width="300">
               <label>Filter by Weaknesses: </label>
               <select id="weakSel" 
                        name="weakSel" 
                        onChange={(e) => setSearchWeaknesses(e.target.value)} 
                        value={searchWeaknesses}>
                        <option value="">All</option>
                        {arrWeaknesses.map((weak, index) => { return (
                           <option key={weak+index} 
                                   value={weak}>{weak}</option>)})}
                </select>
              </td>
          </tr>
          </tbody></table>

        </div>

    {oldFashionedTable(arrShortList)}           
    </>
  )

}

  export {HomePage};