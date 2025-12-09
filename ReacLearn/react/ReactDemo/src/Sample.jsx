import { useState } from "react";

function Sample()
{
    const [name,setName]=useState("")
    return (
        <>
        <h1> Hi This is Sample React!!! {name}</h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <button onClick={()=>{setName("")}}>Clear</button>
        </>

    )
}




export default Sample;
