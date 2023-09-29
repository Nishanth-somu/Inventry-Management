import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Update(){

    let {product_id}=useParams()
            const[product_name,setProductname]=useState('')
            const[price,setPrice]=useState('')
            const[quantity,setQuantity]=useState('')
            const[product_description,setProduct_description]=useState('')

            useEffect(()=>{

           fetch("http://localhost:9005/getsingle/"+product_id)
           .then(res=>res.json())
           .then((out)=>{
            setProductname(out[0].product_name)
            setPrice(out[0].price)
            setQuantity(out[0].quantity)
            setProduct_description(out[0].product_description)
           })

            },[])

            function handleupdate(event){
                event.preventDefault()
                var pname=document.getElementById('product_name').value
                var pprice=document.getElementById('product_price').value
                var pquantity=document.getElementById('quantity').value
                var pdescription=document.getElementById('product_description').value
                 
                var key={

                    product_name:pname,
                    price:pprice,
                    quantity:pquantity,
                    description:pdescription,
                }

                if(pname==""){
                    alert("enter your product_name")
                }
                else if(pprice==""){
                      alert("enter price")
                }
                else if(pquantity==""){
                    alert("enter your quantity")
                }
                else if(pdescription==""){
                    alert("enter product_descrip")
                }
                else{
               axios.put("http://localhost:9005/getid/"+product_id,key)
               .then((res)=>{
                if(res.data.status==="error"){
                    alert("data are not updated")
                }
                else if(res.data.status==="success"){
                    alert("data are updated")
                    window.location.href="/annanagar"

                }
             
               }
               
               )

                }
            }
            

    return(
<>

<form onSubmit={handleupdate}>
<label>Enter product_name  </label>
<input type="text" id="product_name"    onChange={(update)=>{setProductname(update.target.value)}} value={product_name}   />   <br></br>
<label>Enter product price  </label>
<input type="text" id="product_price"     onChange={(update)=>{setPrice(update.target.value)}}    value ={price}   />   <br></br>
<label>Enter product quantity  </label>
<input type="text" id="quantity"  value={quantity} onChange={(update)=>{setQuantity(update.target.value)}}     /><br></br>
<label>Enter product_description  </label>
<input type="text" id="product_description"   value={product_description} onChange={(update)=>{setProduct_description(update.target.value)}}   />
<button type="submit">update</button>

</form>


</>

    );  
}