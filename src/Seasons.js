import { useState } from "react"

export const Seasons=()=>{

    const[wish,setWish]=useState("nothing")
    const[result,setResult]=useState("")
    const[decor,setDecor]=useState({Color:'white',backgroundColor:'black'})

    const trigger=(temp)=>{
        setWish(temp.target.value)
    }

const press=()=>{
    (wish==='spring')?setDecor({Color:'white',backgroundColor:'green'}):
    (wish==='winter')?setDecor({Color:'white',backgroundColor:'blue'}):
    (wish==='summer')?setDecor({Color:'white',backgroundColor:'yellow'}):
    setDecor({Color:'white',backgroundColor:'black'})
    setResult(wish)
}

    return(
    <>
   <input type="text" name="seasons" placeholder="the season is" onChange={trigger}/>
   <button onClick={press}>click here</button>
   <p style={decor}>{result}</p>
    </>
    )
    

}