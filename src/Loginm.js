import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


let Loginm=()=>{

    let n=useNavigate("")
    let Sig=()=>{
        n("/")
    }

    let [username,Setname]=useState("")
    let [password,Setpass]=useState("")


        const login = async (e) => { 
            e.preventDefault()
                 if(username=='') {
                    alert('please enter username')
                     }
                 else if(password=='') {
                         alert('please enter password')
                        }
                 else {
                    
                    let result=await axios.post("http://localhost:8080/hostaa/login/"+username+"/"+password)
                  alert(result.data)
                    if(result.data=="success"){
                        localStorage.setItem("uname",username);
                        n("/home")
                    }
        }
        }
        

    return(
        <div  id="div1">
            <div id="container1">
                <form id="fr">
                    <h1 style={{color:"black",paddingBottom:"60px"}}>LOG IN</h1>
            <input type="text" placeholder="Enter Your Name" class="inp1" onChange={e=>Setname(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter Password" class="inp2" onChange={e=>Setpass(e.target.value)}/><br></br>
            <button onClick={login}>LOGIN</button> 
            <li style={{color:"red"}} onClick={Sig}>Forget password?</li>
            </form>
            </div>
        </div>
    )
}
export default Loginm;