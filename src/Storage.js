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

export const executeCreating=(obj)=>{
    loading()
    records.push(obj)
    affect()
}

export const executeListing=()=>{
    loading()
    return records
}


