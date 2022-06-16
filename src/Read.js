import { useEffect, useState } from "react"
import { executeReading } from "./Storage"

export const Read=(Jessy)=>{

    const[arr,setArr]=useState({})

    useEffect(()=>{
     const tempo=executeReading(Jessy.which)
     setArr(tempo)
    },[]
        
    )

    return(
        <>
        <div className="container">
            <div className="row justify-content-center mt-3">
                <div className="card col-lg-8 col-md-10 col-sm-12 shadow text-success bg-warning">
                    <h2 className="card-title display-3 text-center">{arr.ename}</h2>
                    <div className="card-body">
                        <p className="card-text float-start">{arr.estudy}</p>
                        <p className="card-text float-end">{arr.age}</p>

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}