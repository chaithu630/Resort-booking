import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
var Contact=()=>{

    let [o,setfname]=useState("")
    let [m,setlname]=useState("")
    let [n,setemail]=useState("")
    let [l,setnum]=useState("")
    let [p,setnote]=useState("")

    let v=useNavigate()
    let gohome=()=>{
        v("/home")
    }
    var goresort=()=>{
        v("/resort")

    }
    var gofacility=()=>{
        v("/facility")
    }
    var dea=()=>{
        v("/bookingdea")
       }
    var mes=async(e)=>{
        e.preventDefault();
       
        
        if(o==""&& m==""&& n==""&& l==""){
            alert("please enter the required information")
        }
        else{
              let mydaa={fname:o,lname:m,email:n,number:l,note:p}
               let res=await axios.post('http://localhost:8080/cont/postdataaa',mydaa);
                 alert(res.data)


         }
    }
    return(
        
    <div>
        <div  class="a"style={{backgroundColor:"black",height:"170px" ,width:"33cm" }}>
       <h1 style={{color:"aqua",paddingLeft:"70px"}}>Your Happiness is our Proirity</h1>
       <ul>
           <li onClick={gohome}><a href="">Home</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <li>Booking_Dea</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <li  onClick={goresort}>Resorts</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <li onClick={gofacility}>Facilities</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <li class="active">Contact</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           

       </ul>
       </div>
       

        <div id="contact">
            <div>
                <div><h1 style={{paddingBottom:"20px",color:"crimson"}}>Start a Conversation With Us</h1></div>
                
                <pre><b>First name       Last name</b></pre>
                <input  id="d"type="text" value={o} onChange={e=>setfname(e.target.value)} placeholder="enter your first name" required></input>&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input  id="e"type="text" value={m} onChange={e=>setlname(e.target.value)} placeholder="enter your last name" required></input>
                
            </div>
            <div>
                <pre><b>Email             phone number</b></pre>
                <input  id="f"type="text" value={n} onChange={e=>setemail(e.target.value)} placeholder="enter you mail" required></input>&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input id="g" type="text" value={l} onChange={e=>setnum(e.target.value)} placeholder="enter your phone number"required></input>
                
            </div>
            <div>
                <pre><b> what you have in mind</b></pre>
            </div>
            <div>
                
                <input  style={{height:"90px",width:"400px"}}type="text" value={p} onChange={e=>setnote(e.target.value)} placeholder="send your message" ></input>
            </div>
            <div>
                <input onClick={mes} style={{backgroundColor:"gold",marginTop:"20px",borderRadius:"9px"}} type="button" value="Send a Message"></input>
            </div>
            <h3 style={{color:"blue",paddingRight:"90px"}}>if anything urgent contact to below number</h3>
           <h2>+918687546798</h2>
        </div>
        </div>
    )
}
export default Contact;