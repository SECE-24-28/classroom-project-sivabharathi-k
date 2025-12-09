import { useState } from "react";

function UseStateEg()
{
    const [Student,setStudent]=useState(
        {
            name:"siva",
            age:20,
            dept:"Information Technology"
        }
    )

    function Update()
    {
       // setStudent({name:"bharathi"})

       setStudent((previousData)=>{return({...previousData,name:"bharathi"})})
    }

    return (
        <>
        <h1>Name:{Student.name}</h1>
        <h1>Age:{Student.age}</h1>
        <h1>dept:{Student.dept}</h1>
        
        <button onClick={Update}>ChangeName</button>
        </>
    )
}

export default UseStateEg

