import { useEffect, useState } from "react"
import { record } from "./Style"

export const Table=()=>{

const[myRecords,setmyRecords]=useState([])

useEffect(()=>{
    setmyRecords(record)
},[])
    return(
        <>
        <table className="table table-bordered col-lg-8 col-md-10 col-sm-12 shadow">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>College</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
{myRecords.map((ele,ind)=>(
    <tr>
    <td>{ele.ename}</td>
    <td>{ele.ecollege}</td>
    <td>{ele.age}</td>
    </tr>
))}
            </tbody>
        </table>
        </>
    )
}