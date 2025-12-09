import { useEffect, useState } from "react"

const UseEffectEg=()=>{
    const [data,setData]=useState(100)
   useEffect(()=>{
console.log("hello",{data} )
   })
    return(
        <>
        <h1>This is UseEffect Example!!!</h1>
        <h2>the data : {data}</h2>
<button onClick={()=>{
    setData((t)=>t=t+1)
}}>increment</button>
        </>
    )
}
export default UseEffectEg