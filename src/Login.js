import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
    return (
      <div>
        <h1>Login</h1>
        <NavLink to="/logic" 
        
        >sighup</NavLink>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
}

export default Login