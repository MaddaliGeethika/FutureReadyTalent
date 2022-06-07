import React, { useState } from "react";
const Contact=()=>{
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        message:"",
    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit=(e)=>{
e.preventDefault();
alert(`My name is ${data.fullname}.Mymobile number is ${data.phone}. My email is ${data.email}.My message is ${data.message}`);
    };
    return(
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname"value={data.fullname} onChange={InputEvent} placeholder="Enter your name"/>
</div>


<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1"name="phone"value={data.phone} onChange={InputEvent} placeholder="mobile number"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email"value={data.email} onChange={InputEvent}placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Message</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="message"value={data.message} onChange={InputEvent}placeholder=""/>
</div>

                    </form>
                </div>
                <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </div>
        </div>
        </>
    );
};

export default Contact;