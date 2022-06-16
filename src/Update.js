import { useEffect, useState } from "react"
import { executeReading, executeUpdating } from "./Storage"

export const Update=(praba)=>{

    const[want,setWant]=useState({})

    useEffect(()=>{
      setWant(executeReading(praba.give))
    },[])

    const onTrack=(sil)=>{
        const{name,value}=sil.target

        setWant((remain)=>{
            return{
                ...remain,
                
                [name]:value
            }

            
        }

        )
    }

    const change=()=>{
        executeUpdating(want)
        alert(want.ename+"has updated")
    }


    return(
        <>
        <h1>Update component</h1>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12 shadow p-4">
                    <input type="text" onChange={onTrack} value={want.ename} readOnly="true" name="ename"className="form-control" placeholder="ename"/>
                    <input type="text" onChange={onTrack} value={want.estudy} name="estudy"className="form-control" placeholder="estudy"/>
                    <input type="text" onChange={onTrack} value={want.age} name="age"className="form-control" placeholder="age"/>
                   <div className="row justify-content-center mt-3">
                    <button className="btn btn-outline-warning col-1" onClick={change}>
                    <i class="bi bi-cloud-download-fill"></i>
                    </button>
                    </div>  
                     


                </div>

            </div>

        </div>
        </>
    )
}