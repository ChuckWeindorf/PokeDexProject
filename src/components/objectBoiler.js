function siftPokemon(fullList)
{
    //Trim the pokemon object to contain only what I want to see
    //Flatten subobjects to a string

if (!fullList){return[]}
let newArray = [];

for (let vint=0; vint < fullList.length; vint++)
//for (let vint=0; vint < 10; vint++)
{
    let smallObj = {};
    smallObj.num = fullList[vint].num;
    smallObj.name = fullList[vint].name;
    smallObj.img = fullList[vint].img;
    smallObj.type = fullList[vint].type.join(", ");
    smallObj.weaknesses = fullList[vint].weaknesses.join(", ");
    newArray.push(smallObj);
}
return newArray;
}

function setPickLists(fullList)
{
  let setTypes = new Set();
  let setWeaknesses = new Set();
  for (let vint = 0; vint < fullList.length; vint++) 
    {
    fullList[vint].type.forEach(element => { setTypes.add(element)});
    fullList[vint].weaknesses.forEach(element => { setWeaknesses.add(element)});
    }

  let arrTypes = Array.from(setTypes);
  arrTypes.sort();
  let arrWeaknesses = Array.from(setWeaknesses);
  arrWeaknesses.sort();
  return [arrTypes, arrWeaknesses];
}

function filterArray(arrTableList, txtName, txtType, txtWeaknesses)
{   
//    console.log(txtName, txtType, txtWeaknesses);
    if (arrTableList && (txtName.length > 0 | 
                        txtType.length > 0 | 
                        txtWeaknesses.length > 0))
      {
        let arrShortList = arrTableList.filter(element =>
                   {return (element.type.includes(txtType)
                            && element.weaknesses.includes(txtWeaknesses)
                            && element.name.startsWith(txtName))});

//        console.log(arrShortList);
        return arrShortList;
      }
    else 
        {return arrTableList}
}

export { siftPokemon, setPickLists, filterArray}