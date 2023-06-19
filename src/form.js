import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

var Hello=()=>{
    let [x,setname]=useState("")
    let [y,setemail]=useState("")
    let [z,setpassword]=useState("")
    var n=useNavigate("")

    let log=()=>{
        n("/login")
    }
 
    
  
    var change=async(e)=>{
        e.preventDefault()
     
       
        if(x=="" && y=="" && z==""){
            alert("please enter the neccessary information")
        }
        else if(x==""){
            alert("please enter the name")
            
        }
        else if(y==""){
            alert("please enter mail or phone")
        }
        else if(z==""){
            alert("please enter the password")
        }
        
        else{
            let data={username:x,email:y,password:z}
          let result=await axios.post('http://localhost:8080/hostaa/logindara',data)
                 alert(result.data)
            
        }
        
        
    
    }
  

    
    return(<div class="ba">
        <div >
            <div>
        <div class="con">
            <span class="border"></span>
           
            <form >
                
                <center><h1>Sign Up</h1></center><br></br>
                <div class="font"></div>
               <span>Name:</span> <input  type="text" id="a" value={x} onChange={e=>setname(e.target.value)} placeholder="enter name" required></input><br></br><br></br>
                <div class="font1" name=""></div>
                <span>Email or phone:</span><input  type="text" id="b" value={y} onChange={e=>setemail(e.target.value)} placeholder="enter mail or phone num" required></input><br></br><br></br>
                <div class="font3"></div>
             <span>  Password:</span><input type="password" id="c" value={z} onChange={e=>setpassword(e.target.value)} placeholder="enter password" required ></input><br></br><br></br>
                <button  style={{marginTop:"35px"}}type="submit" onClick={change}>SIGNUP</button>
               <button onClick={log}>LOGIN</button>
                <div class="forg">
                <a href="#" >Forgot password?</a>
                <span></span>
            
                
            </div>
            </form>
           
            
        </div>
        </div>
        </div>
        </div>
        

    )
    }
export default Hello;