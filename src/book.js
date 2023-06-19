
import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

var Book=()=>{
    let usern=localStorage.getItem("uname");

    let [fcheckin,setin]=useState("")
    let [fcheckout,setout]=useState("")
    let [fchild,setchild]=useState("")
    let [fadult,setadult]=useState("")
    let [fday,setday]=useState("")
    let [froom,setroom]=useState("")
    var v=useNavigate()
    var goresort=()=>{
        v("/resort")

    }
    var gohome=()=>{
        v("/home")
    }
    var gocontact=()=>{
        v("/contact")
    }
    
    var change=()=>{
        v("/form")
    }
    var dea=()=>{
        v("/bookingdea")
    }

    let bok=async(e)=>{
        e.preventDefault();
        if(fcheckin=="" || fcheckout=="")
        {
            alert("Data is required to book!")
        }
       else {
            let data={user:usern,checkin:fcheckin,checkout:fcheckout,adult:fadult,child:fchild,days:fday,room:froom}
            let  res=await axios.post("http://localhost:8080/booking/posting",data)
            alert(res.data)
            if(res.data=="Booking succes"){
                v("/home")
            }
        }
    }

    
    return(
        <div>

<div  class="a"style={{backgroundColor:"black",height:"170px" }}>
            <h1 style={{color:"aqua",paddingLeft:"70px"}}>Your Happiness is our Proirity</h1>
            <button style={{marginLeft:"29cm",width:"90px"}} type="submit" onClick={change}>Logout</button>
            
            <ul>
                <li  onClick={gohome}><a href="">Home</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li onClick={dea}>Booking_Dea</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li  class="active"onClick={goresort}>Resorts</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li>Facilities</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li onClick={gocontact}>Contact</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                

            </ul>
            </div>
            
            <div style={{backgroundColor:"gold",height:"11cm"}}>
               <center> <h1 >book your favorite resort now</h1></center>
                <pre style={{fontSize:"20px"}}>check-in date:                                                                      check-out date:</pre>
                <input type="datetime-local" value={fcheckin} onChange={e=>setin(e.target.value)} style={{height:"60px",width:"500px"} }></input>&nbsp;&nbsp;&nbsp;
                
                <input type="datetime-local" value={fcheckout} onChange={e=>setout(e.target.value)} style={{height:"60px",width:"500px"}}></input><br></br><br></br>
                
                <div>
                
                   
                    <select id=""  value={fadult} onChange={e=>setadult(e.target.value)}>
                        
                    <option type="radio" name="adults" >Adults</option>
                    <option type="radio" name="adults">0</option>
                    
                    <option type="radio" name="adults" >1</option>
                    
                    <option type="radio" name="adults">2</option>
                    
                    <option type="radio" name="adults">3</option>
                    
                    <option type="radio" name="adults">4</option>
                    
                    <option type="radio" name="adults">5</option>
                    
                    
                    
                    </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                
                
                
                
                <select id="" value={fchild} onChange={e=>setchild(e.target.value)} >
                        
                        <option type="radio" name="adults" >Childern</option>
                        <option type="radio" name="adults">0</option>
                        
                        <option type="radio" name="adults" >1</option>
                        
                        <option type="radio" name="adults">2</option>
                        
                        <option type="radio" name="adults">3</option>
                        
                        <option type="radio" name="adults">4</option>
                        
                        <option type="radio" name="adults">5</option>
                        
                        
                        
                        </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <select value={froom} onChange={e=>setroom(e.target.value)}>
                        <option type="radio" name="adults" >Rooms</option>
                        
                        
                        <option type="radio" name="adults" >1</option>
                        
                        <option type="radio" name="adults">2</option>
                        
                        <option type="radio" name="adults">3</option>
                        
                        <option type="radio" name="adults">4</option>
                        
                        <option type="radio" name="adults">5</option><br></br>
                        
                        
                        
                        </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <select value={fday} onChange={e=>setday(e.target.value)}>
                            <option>how many days want to stay</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option><option>7</option>
                        </select>
                        <center><button  style={{marginTop:"60px"}} onClick={bok} >Book</button></center> 
                   
                        </div>
                     </div>
                     </div>
    )
}
export default Book;