import React from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


import { useNavigate } from "react-router-dom";
let Resort=()=>{
  const [value, setValue] = React.useState(4);
    let v=useNavigate()
    let gohome=()=>{
        v("/home")
    }
    var gocontact=()=>{
        v("/contact")
    }
    var gobook=()=>{
        v("/book")
    }
    var gofacility=()=>{
        v("/facility")
    }
   var dea=()=>{
    v("/bookingdea")
   }
   var goview=()=>{
    v("/view")
   }
    return(
        <div>
           <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    ></Box>
     <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
             <div  class="a"style={{backgroundColor:"black",height:"170px",width:"81cm " }}>
            <h1 style={{color:"aqua",paddingLeft:"70px"}}>Your Happiness is our Proirity</h1>
            
            
            <ul>
                <li onClick={gohome}><a href="">Home</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li onClick={dea}>Booking_Dea</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="active" >Resorts</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li onClick={gofacility}>Facilities</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li onClick={gocontact}>Contact</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                

            </ul>
            </div >
            <div><h1 style={{textAlign:"center",color:"blue"}}>Search Resorts</h1></div><div id="re">
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img  onClick={goview} style={{backgroundSize:"cover",height:"9cm",width:"9.9cm",border:"solid"}}  src="https://www.tridenthotels.com/img/hyderabad-deluxe-rooms.jpg"></img>
                <h1>Status Suites</h1>
                <p>Indiranagar, next to EGL, Amar Jyothi layout, Domlur, Bangalore , Bangalore</p>
              <h1 style={{color:"red"}}>₹949</h1>
              <s>₹4468</s><br></br>
              <Rating name="read-only" value={value} readOnly />
              <h5 style={{color:"orange"}}>78% offer</h5>
              <p>per room per night</p>
              <button  onClick={goview}style={{backgroundColor:"white",fontSize:"25px",color:"black",width:"4cm"}}>View Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={gobook} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>Book Now</button>
              </div>&nbsp;&nbsp;&nbsp;&nbsp;
              
                
               
               
            
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img  onClick={goview} style={{backgroundSize:"cover",height:"9cm",width:"10cm"}} src="https://sri-nandi-comforts.hotelsinbangalore.net/data/Photos/OriginalPhoto/5869/586955/586955187/bangalore-sri-nandi-comforts-photo-27.JPEG"></img>
                <h1>Nandi Conforts</h1>
                <p>#97 Devaraj Urs Terminal, Kanteerva Studio Main Road, 2nd Stage, Yeshwantpur, Bangalore</p>
              <h1 style={{color:"red"}}>₹862</h1>
              <s>₹3062</s>
              <br></br>
              <Rating name="read-only" value={value} readOnly />
              <h5 style={{color:"orange"}}>71% offer</h5>
              <p>per room per night</p>
              <button  onClick={goview} style={{backgroundColor:"white",fontSize:"25px",color:"black",width:"4cm"}}>View Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={gobook}  style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>Book Now</button>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img  onClick={goview} style={{backgroundSize:"cover",height:"9cm",width:"10cm"}} src="https://images.oyoroomscdn.com/uploads/hotel_image/196084/2c228fd26e5de7b9.jpg"></img>
                <h1>VMK paradise</h1>
                <p>N.G.E.F East layout, Kasturi Nagar, Benniganahalli, Banaswadi, Near CMR University road, Bangalore, India , Bangalore</p>
              <h1 style={{color:"red"}}>₹852</h1>
              <s>₹3548</s><br></br>
              <Rating name="read-only" value={value} readOnly />
              <h5 style={{color:"orange"}}>75% offer</h5>
              <p>per room per night</p>
              <button   onClick={goview}style={{backgroundColor:"white",fontSize:"25px",color:"black",width:"4cm"}}>View Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={gobook}  style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>Book Now</button>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img  onClick={goview} style={{backgroundSize:"cover",height:"9cm",width:"10cm"}} src="https://images.oyoroomscdn.com/uploads/hotel_image/168724/large/5cdf692d46e0d93d.jpg"></img>
                <h1>Valleyton Park</h1>
                <p>1090/A, 5th Block, Ashwath Nagar, HBR Layout, Bangalore</p>
              <h1 style={{color:"red"}}>₹1052</h1>
              <s>₹3889</s><br></br>
              <Rating name="read-only" value={value} readOnly />
              <h5 style={{color:"orange"}}>72% offer</h5>
              <p>per room per night</p>
              <button  onClick={goview} style={{backgroundColor:"white",fontSize:"25px",color:"black",width:"4cm"}}>View Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={gobook}  style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>Book Now</button>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img   onClick={goview}style={{backgroundSize:"cover",height:"9cm",width:"10cm"}} src="https://images.oyoroomscdn.com/uploads/hotel_image/211987/large/9a1dc744a5a17eb1.jpg"></img>
                <h1>Chethana Inn</h1>
                <p>1,2, Bhadrappa Layout, Kodigehalli, Yelahanka Zone, Bengaluru, Yelahanka taluku, Bangalore Urban, 560013, Bangalore</p>
              <h1 style={{color:"red"}}>₹1052</h1>
              <s>₹3250</s><br></br>
              <Rating name="read-only" value={value} readOnly />
              <h5 style={{color:"orange"}}>66% offer</h5>
              <p>per room per night</p>
              <button  onClick={goview} style={{backgroundColor:"white",fontSize:"25px",color:"black",width:"4cm"}}>View Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={gobook}  style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>Book Now</button>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img   onClick={goview}style={{backgroundSize:"cover",height:"9cm",width:"10cm"}} src="https://images.oyoroomscdn.com/uploads/hotel_image/88914/large/5ada17b66cb040b3.jpg"></img>
                <h1> Yatra Inn</h1>
                <p>3rd Floor, Bank Building, Jc Road Bangalore, 23 J C Road Signal Union, Near Minerva Circle, Lalbagh, Bangalore

</p>
              <h1 style={{color:"red"}}>₹1046</h1>
              <s>₹2988</s><br></br>
              <Rating name="read-only" value={value} readOnly />
              <h5 style={{color:"orange"}}>64% offer</h5>
              <p>per room per night</p>
              <button  onClick={goview} style={{backgroundColor:"white",fontSize:"25px",color:"black",width:"4cm"}}>View Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button  onClick={gobook} style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>Book Now</button>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img   onClick={goview}style={{backgroundSize:"cover",height:"9cm",width:"10cm"}} src="https://images.oyoroomscdn.com/uploads/hotel_image/205478/large/db177b17deed5d17.jpg"></img>
                <h1> Sri Thirumala resort</h1>
                <p>320 Mysore Road, Ranganathan Colony, Opp BHEL, Bangalore</p>
              <h1 style={{color:"red"}}>₹788</h1>
              <s>₹2448</s><br></br>
              <Rating name="read-only" value={value} readOnly />
              <h5 style={{color:"orange"}}>67% offer</h5>
              <p>per room per night</p>
              <button  onClick={goview} style={{backgroundColor:"white",fontSize:"25px",color:"black",width:"4cm"}}>View Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={gobook}  style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>Book Now</button>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={{border:"solid",height:"17cm" ,width:"10cm",marginTop:"20px"}}>
                <img  onClick={goview} style={{backgroundSize:"cover",height:"9cm",width:"10cm"}} src="https://images.oyoroomscdn.com/uploads/hotel_image/174383/large/f439c5885cff09e4.jpg"></img>
                <h1>Home Hill Top Homestay</h1>
                <p>Vellathooval, Munnar</p>
              <h1 style={{color:"red"}}>₹5616</h1>
              <s>₹16044</s><br></br>
              <Rating name="read-only" value={value} readOnly />
              <h5 style={{color:"orange"}}>64% offer</h5>
              <p>per room per night</p>
              <button   onClick={goview}style={{backgroundColor:"white",fontSize:"25px",color:"black",width:"4cm"}}>View Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={gobook}  style={{backgroundColor:"green",fontSize:"24px",marginTop:"30px"}}>Book Now</button>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            
        </div>
    )
}
export default Resort;