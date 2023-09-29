import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Product(){
    const[fetchdetail,setFetchdetail]=useState([])
    useEffect(()=>{
        fetch('http://localhost:9005/getcategory')
        .then(res=>res.json())
        .then(data=>setFetchdetail(data))
      
          })
    return(
    <>
             {
fetchdetail.map((value,index)=>(
<>
<div className="row">
<div class="card col-lg-2 mt-5 ms-5">
            <div class="card-body">
                <p> { value.category} </p>
                <Link to={`/getsingle/${value.category}`} class="btn btn-primary">View</Link>
                
            </div>
        </div>  
</div> 
</>

))
    }   
</>
    );

}