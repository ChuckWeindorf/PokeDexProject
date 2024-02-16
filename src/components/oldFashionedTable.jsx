import React from 'react'
import { Link } from 'react-router-dom';

export default function OldFashionedTable( {arrToDisplay}) {

  return (
    <>
    <table className="styled-table ">
        <thead>
            <tr key="tr00">
            <th key="th0">Num</th>
            <th key="th1">Name</th>
            <th key="th2">Type</th>
            <th key="th3">Weaknesses</th>
            <th key="th4">Image</th>
            </tr>
        </thead>
        <tbody>
          {arrToDisplay.map((element, index) => { return (
                    <tr key={"tr" + index}>
                      <td key={"td"+ 0 + index} width="80">{element.num}</td>
                      <td className="bigName" key={"td"+ 1 + index} width="120"><Link to={`pokemon/${element.num}`}>{element.name}</Link></td>

                      <td key={"td"+ 2 + index} width="150">{element.type}</td>
                      <td key={"td"+ 3 + index} width="270">{element.weaknesses}</td>
                      <td key={"td"+ 4 + index} width="100">
                        <Link to={`pokemon/${element.num}`}>
                        <img key={"img"+ 4 + index} width="100" height="100" 
                                 src={element.img}></img></Link></td>
                     </tr>)})}
        </tbody>
    </table>
    </>
  )
}
