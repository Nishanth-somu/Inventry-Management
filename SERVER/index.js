const express = require("express")
const cors= require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")
const connect = express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))
// created a connection with database
let databaseconnection = database.createConnection({
    host:"localhost" ,
    port:3306,
    user:"root",
    password:"Nishanth@2002", 
    database:"inventery"        
})
// used databaseconnection for showing database connected
databaseconnection.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Databases Connected");
    }
})

// used to getdata from table
connect.get('/getdata',(request,response)=>{
    let sql='select * from product_details'
    databaseconnection.query(sql,(error,result)=>{
      if(error){
        response.send(error)
        console.log(error)
      }
      else{
        response.send(result)
      }
    })
})

// insert  value  table
 connect.post('/insert',(request,response)=>{
  let {product_name,price,quantity,product_description,category}=request.body
  let sql='insert into product_details (product_name,price,quantity,product_description,category)values(?,?,?,?,?)'
  databaseconnection.query(sql,[product_name,price,quantity,product_description,category],(error,result)=>{
    if(error){
      response.send({"status":"error"})
      console.log(error)
    }
    else{
      response.send({"status":"success"})    
    } 
  })
 })




//get single category
connect.get('/getsingle/:product_id',(request,response)=>{

    let {product_id}=request.params
    let sql='select * from product_details where product_id=?'
    databaseconnection.query(sql,[product_id],(error,result)=>{
      if(error){
        response.send(error)
        console.log(error);
      }
      else{
        response.send(result)                                 
      }
    })
  })

//view data by category
connect.get('/getsingle/:product_id',(request,response)=>{

    let {product_id}=request.params
    let sql='select * from product_details where category=?'
    databaseconnection.query(sql,[product_id],(error,result)=>{
      if(error){
        response.send(error)
        console.log(error);
      }
      else{
        response.send(result)                                 
      }
    })
  })

  //get single update for id

connect.put('/getid/:product_id',(request,response)=>{

  let {product_id}=request.params
  let {product_name,price,quantity,description}=request.body
  let sql='update product_details set product_name=?,price=?,quantity=?,product_description=? where product_id=?'
  databaseconnection.query(sql,[product_name,price,quantity,description,product_id],(error,result)=>{
    if(error){
      response.send({"status":"error"})
    
    }
    else{
      response.send({"status":"success"})
    }
  })
})

// used to delete data from user
connect.post('/delete',(request,response)=>{
  let product_id=request.body.product_id
  let sql='delete from product_details where product_id=?'
  databaseconnection.query(sql,[product_id],(error,result)=>{
    if(error){
      response.send({"status":"error"})
      console.log(error) 
    }
    else {
      response.send({"status":"success"})

     
    }
  })
  })

//
connect.get('/getcategory',(request,response)=>{
  let sql='select distinct category from product_details'
  databaseconnection.query(sql,(error,result)=>{
    if(error){
      response.send(error)
      console.log(error)
    }
    else{
      response.send(result)
    }
  })
})

//dispatch table


connect.post('/dispatch/:product_id',(request,response)=>{
  let {product_id}=request.params
  let {fromlocation,tolocation,fromquantity,toquantity,dispatchin,dispatchout,u_quantity}=request.body
  let insertsql='insert into product_movement (product_in_time,product_out_time,product_from_location,product_to_location,product_id,product_qty_initial,product_qty_total)values(?,?,?,?,?,?,?)'
  databaseconnection.query(insertsql,[dispatchin,dispatchout,fromlocation,tolocation,product_id,toquantity,u_quantity],(error,result)=>{
    if(error){
      response.send({"status":"error"})
      console.log(error)
    }
    else{
      response.send({"status":"success"})
    }
  })
  let updatequery='update product_details set quantity=? where product_id=?'
  databaseconnection.query(updatequery,[u_quantity,product_id],(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      console.log("updated")
    }

  })
 
} )
connect.get('/getsingledata/:product_id',(request,response)=>{

  let {product_id}=request.params
  let sql='select * from product_details where product_id=?'
  databaseconnection.query(sql,[product_id],(error,result)=>{
    if(error){
      response.send(error)
      console.log(error);
    }
    else{
      response.send(result)                                 
    }
  })
})


//created a port number to run
connect.listen(9005,()=>{
    console.log("your server is running in port 9005")
  }   )