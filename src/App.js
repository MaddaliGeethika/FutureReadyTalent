import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from"./Navbar";
import { Switch ,Route ,Redirect} from "react-router";
import Home from"./Home";
import About from"./About";
import Service from"./Service";
import Contact from"./Contact";
import Footer from"./Footer";
import Signup from"./Signup";
import Login from"./Login";
const App=()=>{
    return(
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Service" component={Service}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/Signup" component={Signup}/>
            <Route exact path="/Login" component={Login}/>
            <Redirect to="/" />
        </Switch>
        <Footer/>
        </>
    );
};

export default App;