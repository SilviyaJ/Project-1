import { useState } from "react"

export const Count=()=>{
const[mounts,setMounts]=useState(0)


const fun=()=>{
    setMounts(mounts+1)
}

const funs=()=>{
    setMounts(0)
}


    return(
        <>
        <button className="btn btn-outline-danger" onClick={fun} onDoubleClick={funs}>
        <i class="bi bi-brush"></i><span style={{backgroundColor:'rosybrown'}}>{mounts}</span>
        </button>
        </>
    )
}