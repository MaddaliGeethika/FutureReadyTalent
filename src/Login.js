import React from "react";
import login from "../src/Images/login.png";
import { NavLink } from "react-router-dom";
const Login=()=>{
    return(
        <>
        <section className="Login">
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
           <div className="container mt-5">
               <div className="signup-content">
                   <div className="signup-form">
                       <h2 className="form-title"> Login</h2>
                      <form className="register-form" id="register-form">
                          <div className="form-group">
                              <label htmlFor="name">
                              <i class="zmdi zmdi-account material-icons-name"></i>
                              </label>
                              <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name"></input>
                          </div>
                          <div className="form-group">
                              <label htmlFor="password">
                              <i class="zmdi zmdi-lock material-icons-name"></i>
                              </label>

                              <input type="password" name="password" id="password" autoComplete="off" placeholder="Password"></input>
                          </div>
                          <div className="form-group form-button">
                              <input type="submit" name="login"id="login" className="form-submit" value="login"></input>
                          </div>
                      </form>
                      <div className="signup-image">
                          <figure>
                              <img src={login} alt="registration pic" height="300"/>
                              </figure>
                              
                       </div> 
                   </div>
           </div>
           </div>
        </section>
        
        </>
    )
}
export default Login;