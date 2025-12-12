
import React from "react";
import { useParams, Link } from "react-router-dom";
import Datas from "./Datas";

export default function Invoice() {
  const { id } = useParams();             
  const myData = Datas();

  
  const invoice = myData.find((item) => item.id === Number(id));

  

return (
    <>
    <h2>Invoice Details — ID: {invoice.id}</h2>
    <p><strong>Name:</strong> {invoice.name}</p>
    <p><strong>Email:</strong> {invoice.email}</p>

    <Link to="/">Back to Invoices</Link>
    </>
);
}
