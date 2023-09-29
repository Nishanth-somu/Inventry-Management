import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Getsingle(){
  
    var {product_id}=useParams()
    const[getCat,setGetCat]=useState([])

    useEffect(()=>{

  fetch("http://localhost:9005/viewdetail/"+product_id)
  .then(res=>res.json())
  .then(data=>setGetCat(data))

    })

    return(
<>
<div className="d-flex justify-content-center mt-5">
     <table className="table-size">
       <tr>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>quantity</th>
        <th>product_description</th>
       </tr>
       {getCat.map((value,index)=>(
          <tr>
            <td> {value.product_name} </td>
            <td> {value.price} </td>
            <td> {value.quantity} </td>
            <td> {value.product_description} </td>
          </tr>
          ))}
     </table>
</div>

</>

    );
}