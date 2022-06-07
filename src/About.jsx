import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/well-being.gif";
import Common from "./Common";

const About=()=>{
    return(
        <>
        <Common name=' welcome to About Page' imgsrc={web} visit='/conatact' btname='Contact Now'/>
        </>
    );
};

export default About;