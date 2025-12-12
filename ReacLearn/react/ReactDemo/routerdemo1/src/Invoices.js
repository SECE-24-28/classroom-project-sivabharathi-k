
import Datas from "./Datas";
import { Link } from "react-router-dom";



function Invoices(){
    const myData = Datas();
    return(
        
        <>
        <h1> This is Invoices</h1>
        <ul>
        {myData.map((d) => (
        <li key={d.id}>
        <Link to={`/invoice/${d.id}`}>{d.id}</Link>
    </li>
))}
</ul>
        </>
        
        
    )
}

export default Invoices;
