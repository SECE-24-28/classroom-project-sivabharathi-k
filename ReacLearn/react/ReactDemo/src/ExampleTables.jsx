import { useState } from "react";

function ExampleTables(){
    const [data,setData] = useState(["Multiple of 9 Tables"]);
    const [count,setCount]=useState(9)

    function Table(){
        var item =count;

        setData((pre)=>{return([...pre,item])})

        setCount((t)=>{return(t+9)})}

        return(
            <>
            <h1>MULTIPLE OF NINE TABLES</h1>
            <button onClick={Table}>Click</button>
            <ul>
                {
                    data.map((d)=>{
                        return(<li>{d}</li>)
                    })
                }
            </ul>
            </>
        )
}

export default ExampleTables    