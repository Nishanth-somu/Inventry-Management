import axios from "axios";
import React from "react";
export function Addproduct(){

    function handlelogin(event){
        event.preventDefault()
        var product_name= document.getElementById('product_name').value
        var price= document.getElementById('price').value
        var quantity= document.getElementById('quantity').value
        var product_description= document.getElementById('product_description').value
        var category= document.getElementById('category').value

        var key={
            product_name:product_name,
            price:price,
            quantity:quantity,
            product_description:product_description,
            category:category
            
        }
        if(product_name==""){
            alert("enter your name")
        }
        else if(price==""){
            alert("enter your price")
        }
        else if(quantity==""){
            alert("enter your quantity")
        }
        else if(product_description==""){
               alert("enter your product_description")
        }    
        else if(category==""){
            alert("enter your category")
        }  
          else {

            axios.post("http://localhost:9005/insert",key)
            .then((res)=>{
                if(res.data.status==="error"){
                    window.location.reload()
                }
                else if(res.data.status==="success"){
                    alert("data are inserted")
                }
            })
        }
    }

return(
<>

<div className="justify-content-center p-5 text-center mt-5 add-img">
<h1 className="text-center text-dark">Add Product</h1><br></br>
<form onSubmit={handlelogin} className="mt-5">

<tablle>
    <tr>
        <th> product_name </th>
        <td> <input type="text" className="mt-3" id="product_name" />  </td>
    </tr>
      <tr>
        <th>price</th>
        <td> <input type="text" className="mt-3" id="price"  />  </td>
      </tr>
      <tr>
        <th>quantity</th>
        <td> <input type="text" className="mt-3"  id="quantity" />  </td>
      </tr>
      <tr>
        <th>product_descrip</th>
        <td> <input type="text" className="mt-3" id="product_description" />  </td>
      </tr>
      <tr>
        <th>category</th>
        <td> <input type="text" className="mt-3"  id="category" />  </td>
      </tr>
      <tr>
       <td><input type="submit" className="btn btn-success text-center"/></td> 
      </tr>
</tablle>
</form>
</div>

</>

);

}