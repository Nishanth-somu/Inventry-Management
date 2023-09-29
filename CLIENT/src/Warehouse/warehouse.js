import React from "react";
import { Link } from "react-router-dom";
export function Warehouse() {


    return (

        <>
            <div className="text-center warehose-img">
                <h1 className="text-center text-light p-5">Branches Location</h1>
                <div className="d-flex justify-content-center mt-5 align-items-center ">

                <div class="card-one w-50 col-lg-2 mt-5 ms-5">
                    <div class="card-body">
                        <h5 class="card-title fw-bold mt-4">Anna Nagar</h5>
                        <p class="card-text mt-4">Main Branch</p>
                        <Link to="/annanagar " className="btn btn-primary"> view </Link>

                    </div>
                </div>




                </div>
                


            </div>

        </>

    );
}