import React from "react";
import { useNavigate } from "react-router-dom";
var Facility=()=>{
    var v=useNavigate()
    let gohome=()=>{
        v("/home")
    }
    var gocontact=()=>{
        v("/contact")
    }
    var goresort=()=>{
        v("/resort")
    }
    var dea=()=>{
        v("/bookingdea")
       }
    
    return(
        <div>
             <div>
        <div  class="a"style={{backgroundColor:"black",height:"170px" }}>
       <h1 style={{color:"aqua",paddingLeft:"70px"}}>Your Happiness is our Proirity</h1>
       
       <ul>
           <li onClick={gohome}><a href="">Home</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <li onClick={dea}>Booking_Dea</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <li  onClick={goresort}>Resorts</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <li class="active">Facilities</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <li onClick={gocontact}>Contact</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           

       </ul>
       </div>
       </div>
        <div id="l">
            <h1 style={{color:"blue",textAlign:"center"}}>Facilities & Services that Make a Great Resort</h1>
            <img style={{backgroundSize:"cover",height:"10cm",width:"15cm",paddingLeft:"1cm"}} src="https://blog.thecrane.com/hubfs/Crane%2035.jpg"></img>
            
           <center> <h1 style={{color:"deeppink"}}>Swimming Pool</h1></center>
            <img  style={{backgroundSize:"cover",height:"10cm",width:"15cm",paddingLeft:"1cm"}}src="https://storage.googleapis.com/stateless-www-wotif-com/2018/12/c55a30d4-hero.jpg"></img>
            <h1 style={{color:"deeppink"}}>Free wifi</h1>
            <img style={{backgroundSize:"cover",height:"8cm",width:"15cm",paddingLeft:"4cm"}}src="https://www.freepnglogos.com/uploads/logo-wifi-png/free-wifi-logo-icon-png-images-23.png"></img>
            <p> free Wi-Fi is a wonderful luxury to stay in touch with family and friends, share updates on your trip, do research on the resort and country and so on. This adds a measure of convenience which most guests highly appreciate.</p>
            
            <h2 style={{color:"deeppink"}}>Wellness Facilities</h2>
            <img style={{backgroundSize:"cover",height:"10cm",width:"15cm",paddingLeft:"4cm"}} src="https://drprem.com/wellness/wp-content/uploads/sites/7/2020/10/wellness-resort-services.jpg"></img>
            <p>Health and wellness is important to many travelers and this amenity often sets great resorts apart from the others. On site Spas and Fitness Centres are wonderful for those guests who wish to keep up with their wellness regimes. Resorts such as we also have Juice Bars with healthier food and beverage options, in addition to their wellness facilities.</p>
            <h2 style={{color:"deeppink"}}>Concierge</h2>
            <p>Not a fan of the added stress of making booking arrangements during your trip? Resorts with Concierges are the best choice. A resort’s Concierge acts as a personal assistant to the guests. You can have a chat with an agent and consider all your bookings handled. They provide recommendations based on your needs and will handle dinner reservations, arrangement of transportation, tour arrangements, tickets for events and any other activities which will make your stay enjoyable.</p>
            <h2 style={{color:"deeppink"}}>Daily Housekeeping</h2>
            <p>While on a getaway, clean surroundings add to the experience. Great resorts offer daily housekeeping as an amenity for guests. Accommodations which are kept clean, attractive and comfortable allow you to relax and enjoy your stay.</p>
            <h2 style={{color:"deeppink"}}>Entertainment</h2>
            <p>Great resorts offer guests entertainment on some nights, which does not require guests to leave the resort. This is great for mingling with other guests and locals, and in some instances, getting a taste of the country’s culture. Examples of some types of entertainment include live bands, dancing, karaoke, culinary displays and many others.</p>
            <h2 style={{color:"deeppink"}}>Kids’ Clubs</h2>
            <p>Kids’ Clubs are wonderful for adults traveling with young children. While family time is important, adults may still require a little alone time or wish to attend an event or function which is not appropriate forchildren. Also, children may get bored with the adults and want to play with other children. Family friendly resorts offer Kids’ Clubs where younger guests can play together, watch movies, do arts and crafts and many other activities until their parents or guardians return. Adults can relax knowing that the children are safe and entertained.</p>
        </div>
        </div>
    )
}
export default Facility;