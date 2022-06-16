import { useEffect, useState } from "react"
import { executeListing } from "./Storage"
import { Create } from "./Create"
// import { affect } from "./Storage"

export const Createlist=()=>{
const[temArr,setTempArr]=useState([])

const[cview,setCview]=useState(false)

useEffect(()=>{
//  affect()
    setTempArr(executeListing())
},[])

return(
<>
<div className="container mt-3">
        {(cview)?
        <>
            <Create/>
            <button className="btn btn-outline-secondary" onClick={()=>{
                setCview(true)
                window.location.assign("/")
            }}>
                <i class="bi bi-skip-backward-circle-fill"></i>
                    <i class="bi bi-skip-backward-circle-fill"></i>
            </button>
        </>
        :
        <>
            <button className="btn btn-outline-success" onClick={()=>{
                setCview(false)
            }}>
                <i class="bi bi-newspaper"></i>
            </button>
            <div className="row justify-content-center">
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
        </div>
            </>}
        </div>
</>
)


}