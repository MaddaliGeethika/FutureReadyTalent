import React from "react";
import signup from "../src/Images/signup1.png";
import { NavLink } from "react-router-dom";
const Signup=()=>{
    return(
        <>
        <section className="signup">
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Signup</NavLink>
        </li>
           <div className="container mt-5">
               <div className="signup-content">
                   <div className="signup-form">
                       <h2 className="form-title"> Sign up</h2>
                      <form className="register-form" id="register-form">
                          <div className="form-group">
                              <label htmlFor="name">
                              <i class="zmdi zmdi-account material-icons-name"></i>
                              </label>
                              <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name"></input>
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">
                              <i class="zmdi zmdi-email"></i>
                              </label>
                              <input type="text" name="email" id="email" autoComplete="off" placeholder="Your Email"></input>
                          </div>
                          <div className="form-group">
                              <label htmlFor="phonenumber">
                              <i class="zmdi zmdi-phone"></i>
                              </label>
                              <input type="number" name="phonenumber" id="phonenumber" autoComplete="off" placeholder="Your Phone number"></input>
                          </div>
                          <div className="form-group">
                              <label htmlFor="password">
                              <i class="zmdi zmdi-lock material-icons-name"></i>
                              </label>

                              <input type="password" name="password" id="password" autoComplete="off" placeholder="Password"></input>
                          </div>
                          <div className="form-group">
                              <label htmlFor="cpassword">
                              <i class="zmdi zmdi-lock material-icons-name"></i>
                              </label>

                              <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Password"></input>
                          </div>
                          <div className="form-group form-button">
                              <input type="submit" name="signup"id="signup" className="form-submit" value="register"></input>
                          </div>
                      </form>
                      <div className="signup-image">
                          <figure>
                              <img src={signup} alt="registration pic"/>
                              </figure>
                              <NavLink to="/Login" className="signup-image-link">I am already register</NavLink>
                       </div> 
                   </div>
           </div>
           </div>
        </section>
        
        </>
    )
}
export default Signup;