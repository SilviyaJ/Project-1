import { useEffect, useState } from "react"
import { executeListing } from "./Storage"
// import { affect } from "./Storage"

export const List=()=>{
const[temArr,setTempArr]=useState([])

useEffect(()=>{
//   affect()
    setTempArr(executeListing())
},[])

return(
<>
<table className="table table-bordered table-hover text-center col-lg-8 col-md-10 col-sm-12 shadow">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>College</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
{temArr.map((ele,ind)=>(
    <tr>
    <td>{ele.ename}</td>
    <td>{ele.estudy}</td>
    <td>{ele.age}</td>
    </tr>
))}
            </tbody>
        </table>
</>
)


}