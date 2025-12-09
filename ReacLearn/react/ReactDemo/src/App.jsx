
{/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
function App() {
  var name = "siva";
  var age = 20;
  const Marks = { Tamil: 90, English: 80, Maths: 100 };

  return (
    <>
      <h2>Hlo Welcome . This is react!!!</h2>
      <Sample1 name={name} age={age} Marks={Marks} />
    </>
  );
}

function Sample1(datas) {
  const { name, age, Marks } = datas;

  return (
    <>
      <h1>
        My name is {name} and my age is {age}
      </h1>

      <h2>My Marks:</h2>
      <ul>
        {Object.entries(Marks).map(([subject, mark], index) => (
          <li key={index}>
            {subject}: {mark}
          </li>
        ))}
      </ul>
    </>
  );
}*/}



import { createContext, useState } from "react";
import Display from "./Display"
import Display1 from "./Display1";
export const allDatas=createContext()
function App() 
{
   const [data,setData]=useState();
  var name="hello im the parent"
  var val1=23
  var arr=[12,34,5]
  const person={name:"sai",gender:"male"}
 const receive=(d)=>{
  console.log("got it",d)
  setData(d)
 }
  return (
    <allDatas.Provider value={{name,val1,person,receive,arr}}>
     <h1> welcome  </h1>
     <h1> i've recevied from parent. {data}</h1>
     <h1>--------------------------</h1>
      {/* <Display name={name} a={val1} arr={arr} obj={person}  receive={receive}/> */}
      <Display/>
</allDatas.Provider> 
      
  )
}




export default App;
