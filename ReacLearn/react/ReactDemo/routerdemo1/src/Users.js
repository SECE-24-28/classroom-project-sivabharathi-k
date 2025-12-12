import { useInsertionEffect } from "react"
import { useParams } from "react-router-dom"

function Users(){
    const data= useParams()
    return(
        <>
        <h1>im from users {data.id}</h1>
        </>
    )
}

export default Users

