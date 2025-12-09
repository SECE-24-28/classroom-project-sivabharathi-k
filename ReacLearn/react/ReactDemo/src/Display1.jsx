import { useContext, useState } from "react"
import { allDatas } from "./App"

function Display1(){
    const {name}=useContext(allDatas)
    // const {val}=datas;
    console.log("the data from display: ",{name})
    const [myName,setMyName]= useState("hello")
 
    console.log("im inside the disp1",{myName})
   
    return(
        <>
        <h1>im from dis1{myName}</h1>
        <h1>i've recevied from myGP thru my Parent {name}
             
        </h1>
<button onClick={()=>{setMyName('not demo')}}>click here!!!!</button>
</>
    )
}

export default Display1