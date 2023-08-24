import React from "react";
import{Link} from 'react-router-dom'
function Login()
{
    return <>
    <form>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="password"></input>
        <button><Link to='/Manager'>Login</Link></button>
    </form>
    </>
}
export default Login;


