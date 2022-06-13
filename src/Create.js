import { useState } from "react"
import { executeCreating } from "./Storage"

export const Create=()=>{

    const[mydata,setMydata]=useState({
        "ename":"",
        "estudy":"",
        "age":0,
    })

    const onTrack=(sil)=>{
        const{name,value}=sil.target

        setMydata((remain)=>{
            return{
                ...remain,
                
                [name]:value
            }

            
        }

        )
    }

    const verify=()=>{
        alert(JSON.stringify(mydata))
        executeCreating(mydata)
    }
    return(
        <>
        <h1>Create component</h1>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12 shadow p-4">
                    <input type="text" onChange={onTrack} value={mydata.ename} name="ename"className="form-control" placeholder="ename"/>
                    <input type="text" onChange={onTrack} value={mydata.estudy} name="estudy"className="form-control" placeholder="estudy"/>
                    <input type="text" onChange={onTrack} value={mydata.age} name="age"className="form-control" placeholder="age"/>
                   <div className="row justify-content-center mt-3">
                    <button className="btn btn-outline-warning col-1" onClick={verify}>
                    <i class="bi bi-cloud-download-fill"></i>
                    </button>
                    </div>  
                     


                </div>

            </div>

        </div>
        </>
    )
}