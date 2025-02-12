// import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "./Store";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login()
{
    let username=useRef(null);
    let password=useRef(null);
    let dispatch=useDispatch();
    let navigate= useNavigate();
    let loginCheck=()=> {
        if(username.current.value === "ratan" && password.current.value === "Ratan@123")
        {
            dispatch(login(username.current.value))
            navigate("/home");
        }
        else{
            alert("Your credentials are wrong.check once !");
        }
    }
    return(
        <>
        <h1 className='text-success p-5  fst-italic'>Login Page </h1>
        <label className='fst-italic fst-bold'>User Name :</label>&emsp;
        <input type="text" ref={username} />
        <br/><br/>
        <label className='fst-italic fst-bold'> Password : </label>&emsp;&emsp;
        <input type="password" ref={password} /><br/><br/>
        <button style={{backgroundColor:'green'}} on onClick={loginCheck}>Login</button>
        </>
    )
}
export default Login;