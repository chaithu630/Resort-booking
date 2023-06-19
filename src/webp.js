

import React from "react";
import { useNavigate } from "react-router-dom";



var Web=()=>{
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
    var gofacility=()=>{
        v("/facility")
    }
    var dea=()=>{
        v("/bookingdea")
       }
        
       


    
    return(

        <div>
            <div  class="a"style={{backgroundColor:"black",height:"170px" ,width:"33cm"}}>
            <h1 style={{color:"aqua",paddingLeft:"70px"}}>Your Happiness is our Proirity</h1>
            <button style={{marginLeft:"29cm",width:"90px"}} type="submit" onClick={change}>Logout</button>
            
            <ul>
                <li class="active" onClick={gohome}><a href="">Home</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li onClick={dea}>Booking_Dea</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li onClick={goresort}>Resorts</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li onClick={gofacility}>Facilities</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li onClick={gocontact}>Contact</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                

            </ul>
            </div>
            <div id="img" >


                <h4>The vacation Heaven</h4><h1>Find Best Royal Luxury Resorts</h1><h4>with our vip proffessional services</h4><h3>Luxury & Comport</h3></div>
                
                <div id="img"><h4>The vacation Heaven</h4><h1>Find Best Royal Luxury Resorts</h1><h4>with our vip proffessional services</h4><h3>Luxury & Comport</h3></div>
                <div>
                    
               </div>

                        
                     </div>   
            
        
    )
}
export default Web;