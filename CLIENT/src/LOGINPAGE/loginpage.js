import React from "react";
export function Login() {

    function evaluate(e) {
        e.preventDefault()  
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username == "") {
            alert("Enter your Username");
        }
        else if (password == "") {
            alert("Enter your password");
        }
        else if (username == "admin" && password == "admin") {
            alert("Login Successful")
            window.location.href='/admindash'
        }
        else {
            alert("your username is wrong")
        }
    }

    return (

        <>
            <div className="d-flex justify-content-center flex-column align-items-center background">
                <div>
                <h1 className="mb-5"> Login Page</h1>
                </div>
              <form onSubmit={evaluate}> 
                <table className="text-center" >

                    <tr> <td> <input type="text" id="username" placeholder="username" />  </td> </tr>
                    <tr> <td> <input type="password" id="password" placeholder="password" />  </td> </tr>
                    <tr> <td> <button className="btn btn-primary ">Submit</button> </td> </tr>

                </table>
                </form> 
            </div>
        </>
    );

}