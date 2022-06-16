import { useState } from "react"
import { useEffect } from "react"
import { executeDeleting, executeListing } from "./Storage"
import { Create } from "./Create"
import { Read } from "./Read"
import { Update } from "./Update"
// import { affect } from "./Storage"

export const Readlist=()=>{
    const[tmpArr,setTmpArr]=useState([])

    const[cview,setCview]=useState(false)
    const[rview,setRview]=useState(false)
    const[uview,setUview]=useState(false)

    const[peculiar,setPeculiar]=useState(0)

    useEffect(()=>{
        //affect()
        setTmpArr(executeListing())
    },[])

    return(
        <>
        <div className="container mt-3">
        {(cview)?
        <>
            <Create/>
            <button className="btn btn-outline-secondary" onClick={()=>{
                setCview(false)
                window.location.assign("/")
            }}>
                    <i class="bi bi-skip-backward-circle-fill"></i>
            </button>
        </>
        :
        (rview)?
        <>
            <Read which={peculiar}/>
            <button className="btn btn-outline-secondary" onClick={()=>{
                setRview(false)
                window.location.assign("/")
            }}>
                    <i class="bi bi-skip-backward-circle-fill"></i>
            </button>
        </>
        :
        (uview)?
        <>
        <Update give={peculiar}/>
        <button className="btn btn-outline-secondary" onClick={()=>{
                setUview(false)
                window.location.assign("/")
            }}>
                    <i class="bi bi-skip-backward-circle-fill"></i>
            </button>
        </>
        :
        <>
            <button className="btn btn-outline-success" onClick={()=>{
                setCview(true)
            }}>
                <i class="bi bi-newspaper">create</i>
            </button>
            <div className="row justify-content-center">
                <table className="table table-bordered text-center table-hover col-lg-8 col-md-10 col-sm-12 shadow">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>College</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tmpArr.map((ele,ind)=>(
                            <tr>
                                <td>{ele.ename}</td>
                                <td>{ele.estudy}</td>
                                <td>{ele.age}</td>
                                <td>
                                    <button className="btn btn-outline-warning col-2 me-1" onClick={()=>{
                                        setRview(true)
                                        setPeculiar(ele.ename)
                                    }}>
                                        <i class="bi bi-book-half"></i>
                                    </button>
                                    <button className="btn btn-outline-info col-2 me-1" onClick={()=>{
                                        setUview(true)
                                        setPeculiar(ele.ename)
                                    }}>
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                    <button className="btn btn-outline-danger col-2" onClick={()=>{
                                       executeDeleting(ele.ename)
                                       window.location.assign("/")
                                    }}>
                                        <i class="bi bi-trash-fill"></i>
                                    </button>
                                </td>
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