import { useState } from "react"


export const Extract=()=>{

    const [user,setUser]=useState("")

const like=()=>{
    alert(user+"changes made")
}
 const sil=(jes)=>{
     setUser(jes.target.value)
// console.log(jes.target.name)
// console.log(jes.target.value)
// console.log(jes.target.placeholder)
 }


    return(
        <>
        <input type="text" name={user} placeholder="enter your name" onChange={sil}/>
        <button onClick={like}> say hello</button>
        </>
    )
}