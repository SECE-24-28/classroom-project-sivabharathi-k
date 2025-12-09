import { useState } from "react";

function UseStateEg()
{
    const [Student,setStudent]=useState(
        {
            name:"",
            dept:""
        }
    )
    

    function info(e)
    {
        e.preventDefault()
        console.log("Name is:",Student.name)
        console.log("Dept is:",Student.dept) 
    }

    return (
        <>
        
        <h1>Name:{Student.name}</h1>
        <h1>dept:{Student.dept}</h1>
        
        <input type="text" value={Student.name} onChange={(e)=>{setStudent({...Student,name:e.target.value})}}></input>
        <input type="text" value={Student.dept} onChange={(e)=>{setStudent({...Student,dept:e.target.value})}}></input>
        <button onClick={(e)=>info(e)}>Update</button>
        </>)

}

export default UseStateEg

