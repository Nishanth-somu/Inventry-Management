import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Annanagar(){

    const[fetchdetail,setFetchdetail]=useState([])
    useEffect(()=>{
        fetch('http://localhost:9005/getdata')
        .then(res=>res.json())
        .then(data=>setFetchdetail(data))
    })


const delt=(product_id)=>{
    var key={product_id:product_id}
    axios.post('http://localhost:9005/delete',key)
    .then((res)=>{
        if(res.data.status==='error'){
            alert("data are not deleted ")
        }
        else if(res.data.status==='success'){
            alert("data are deleted")
        }
    })
}

    return(
<>
<div className="d-flex justify-content-center mt-5 ">
    <table className="table-size">

    <tr>
    <th>Product_id</th>
    <th>Product_name</th>
    <th>price</th>
    <th>quantity</th>
    <th>Category</th>
    <th>product_description</th>
    <th>Edit</th>
    <th>Delete</th>
    <th>Distribute</th>
    </tr>

   {
        fetchdetail.map((value,index)=>(
<>
<tr>
<td>{value.product_id}</td>
<td>{value.product_name}</td>
<td>{value.price}</td>
<td>{value.quantity}</td>
<td>{value.category} </td>
<td> {value.product_description}  </td>
<td> <Link to={`/update/${value.product_id}`}>  <button>Edit</button> </Link>   </td>
<td> <button className="bg-danger"  onClick={()=>{delt(value.product_id)}}>Delete</button>    </td>
<td> <Link to ={`/dispatch/${value.product_id}`}> <button className="bg-primary"> Dispatch </button></Link></td>


</tr>

</>

        ))

   }


    </table>
       
 </div>
 </>
    );
}