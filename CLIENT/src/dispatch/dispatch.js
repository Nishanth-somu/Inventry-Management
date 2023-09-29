import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Dispatch(){
    var {product_id}=useParams()
    const[quantity,setQuantity]=useState('')
    useEffect(()=>{
        fetch("http://localhost:9005/getsingledata/"+product_id)
        .then(data=>data.json())
        .then((res)=>{
            console.log(res)
            setQuantity(res[0].quantity)
        })
    })
    


 function handleinsert(){

     var fromlocation = document.getElementById("fromlocation").value
     var tolocation = document.getElementById("tolocation").value
     var fromquantity = document.getElementById("fromquantity").value
     var toquantity = document.getElementById("toquantity").value
     var dispatchin = document.getElementById("dispatchin").value
     var dispatchout = document.getElementById("dispatchout").value
       var u_quantity=fromquantity-toquantity
    
     var key = {
       fromlocation:fromlocation,
       tolocation:tolocation,
       fromquantity:fromquantity,
       toquantity:toquantity,
       dispatchin:dispatchin,
       dispatchout:dispatchout,
       u_quantity:u_quantity
    }
    
    if(fromlocation=""){
       alert("enter from location")
    }
    else if(tolocation==""){
       alert("enter to location")
    }
    else if(fromquantity==""){
       alert("enter from quantity")
    }
    else if(toquantity==""){
       alert("enter to quantity")
    }
    else if(dispatchin==""){
       alert("enter dispatchtime")
    }
    else if(dispatchout==""){
       alert("enter disptchout")
    }
    else{
       axios.post("http://localhost:9005/dispatch/"+product_id,key)
       .then((res)=>{
        console.log(res)
        if(res.data.status==="error"){
            // window.location.reload()
        }
        else if(res.data.status==="success"){
            alert("data are inserted")
        }

       })
    }
 }






    return(
   <>
<div className="d-flex justify-content-center p-5">
    <form onSubmit={handleinsert}>
            <table>
        <tr>
            <th>From location</th>
            <td> <input type="text" id="fromlocation" /> </td>
        </tr>
        <tr>
            <th> TO Location</th>
            <td><input type="text" id="tolocation" /> </td>
        </tr>
        <tr>
            <th>From quantity</th>
            <td> <input type="text" value={quantity} id="fromquantity" />  </td>
        </tr>
        <tr>
            <th>To quantity</th>
            <td> <input type="text" id="toquantity" />  </td>
        </tr>
        <tr>
            <th>Dispatch in</th>
            <td> <input type="date" id="dispatchin" />  </td>
        </tr>
        <tr>
            <th>Dispatch out</th>
            <td> <input type="date" id="dispatchout" />  </td>
        </tr>
        <tr>
            <td> <button type="submit">submit </button> </td>
        </tr>
            </table>
    </form>
</div>
   
   </>


    );
}