let records=[
    {
        "ename":"sil",
        "estudy":"skwc",
        "age":24,
    } ,
    {
        "ename":"praba",
        "estudy":"dgtc",
        "age":24,
    } ,
    {
        "ename":"anu",
        "estudy":"muthayammal",
        "age":24,
    }   
]

const affect=()=>{
    localStorage.setItem("memory",JSON.stringify(records))
}

const loading=()=>{
    const temp=localStorage.getItem("memory")
    records=JSON.parse(temp)
}

export const executeDeleting=(unique)=>{
    loading()
    records=records.filter((ele,ind)=>{
        return ele.ename!==unique

    })
    affect()
    alert(unique+"has terminated")
}

export const executeUpdating=(key)=>{
    loading()
    for(var ind=0;ind<records.length;ind++)
    {
      if(records[ind].ename===key.ename){
        records[ind]=key
        affect()
        return;
      }
    }
    alert("invalid name")

    

}


export const executeReading=(key)=>{
    loading()
    for(var ind=0;ind<records.length;ind++)
    {
      if(records[ind].ename===key){
        return records[ind]
      }
    }
    return{}

    

}
export const executeCreating=(obj)=>{
    loading()
    records.push(obj)
    affect()
}



export const executeListing=()=>{
    loading()
    return records
}


