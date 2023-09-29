import React from "react";
import { Link } from "react-router-dom";
export function AdminDash(){

return(
    <>
<div className="d-flex justify-content-center align-items-center mt-5 background-admindash">
    <div className="row col-lg-6">
        <div>
        <div class="card-admin mt-5 text-center" >
        <h5 class="card-header ">WARE-HOUSES</h5>
            <div class="card-body">
                <h5 class="card-title p-3"> WareHouse-location </h5>
                <p class="card-text p-3">With supporting text below as a natural lead-in to additional content.</p>

                <div className="d-flex justify-content-around ">
                <Link to="/warehouse" class="btn btn-primary mb-5  ms-5">View</Link>
                <Link to ="/addproduct"> <button className="btn btn-success  mb-5"> Add Product </button> </Link>

                </div>
                
            </div>
            </div>
        </div> 
    </div>
                    
    <div>
    </div>

</div>
    </>
);
}