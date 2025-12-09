import { useContext } from "react"
import Display1 from "./Display1"
import { allDatas } from "./App"

function Display(){
    const {name,val1,arr,person,receive}=useContext(allDatas)
    
    const myData="im a child"
//    const {name,a, arr,obj,receive} =datas
    return(
         <>
        <h1>hello {name} {val1}</h1>
        <h2>{arr}</h2> 
        <h2>array datas</h2>
        
         <ul>
            {
                arr.map((d,ind)=>{
                    return (
                        <li key={ind}>{d}</li>
                    )
                })
            }
         </ul>


        <h2>{person.name} {person.gender}</h2>
        <h2>im from display</h2>
       
          <button onClick={()=>{receive(myData) }}>send to parent</button>
           <h1>--------------------------</h1>
            {/* <Display1 val={name}/> */}
        <Display1/>
        </>
    )
}
export default Display