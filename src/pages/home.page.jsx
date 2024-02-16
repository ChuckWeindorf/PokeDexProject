import {useState} from "react";
import {fetchRoutines, getStoredPokemonData} from '../components/fetchRoutines';
import OldFashionedTable from '../components/oldFashionedTable';
import { siftPokemon, setPickLists, filterArray} from '../components/objectBoiler';


function HomePage(props)
 {
 // console.log("Step 1");
  let [searchType, setSearchType] = useState("");
  let [searchWeaknesses, setSearchWeaknesses] = useState("");
  let [searchName, setSearchName] = useState("");
  //console.log("Step 2");
  let bigList = {};
  let arrType = [];
  let arrWeaknesses = [];
  let arrShortList = [];
 // console.log("Step 3");
  
  if (bigList.pokemon === undefined) 
     {bigList = fetchRoutines()};
//  console.log("Step 4");
  //
  if (bigList.pokemon === undefined) 
     {//NOOP
//      console.log("Step 5a");
    }
  else
     {
//      console.log("Step 5b");
     const newPokemon = siftPokemon(bigList.pokemon);
//     console.log(bigList.pokemon);
     [arrType, arrWeaknesses] = setPickLists(bigList.pokemon);
     arrShortList = filterArray(newPokemon, searchName, searchType, searchWeaknesses);
     }
//     console.log("Step 6");
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

    <OldFashionedTable arrToDisplay={arrShortList}/>           
    </>
  )

}

  export {HomePage};