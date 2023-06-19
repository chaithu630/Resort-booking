import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let user1=localStorage.getItem("uname");

        
var Bookde=()=>{
    
    let[id,setid]=useState("")
    
    const deleteUser=async(e)=>{
        e.preventDefault();
      let res= await axios.delete("http://localhost:8080/booking/dele/"+id)  
       alert(res.data)
    }
    
   
let [dea,setdata]=useState([])


    let bok=async(e)=>{
        e.preventDefault()
        let mydata=await axios.get("http://localhost:8080/booking/bookdata/"+user1)
        setdata(mydata.data)
        
    }
    return(
        
        <div style={{border:"90px"}}>
           
            <h1>Dear {user1} this are your upcoming booking </h1>
            <button onClick={bok}>Click to get deatiles</button>
            <table  border={{}}>
                <tr style={{color:"red"}}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Number of person</th>
                </tr>
            {
                dea.map((k)=>{
                   return <tr>
                    <tr>{k.uid}</tr>
                        <td>{k.user}</td>
                        <td>{k.checkin}</td>
                        <td>{k.checkout}</td>
                        <td>{k.adult}</td>
                    </tr>
                })

            }
            

            </table>
            <input type="text" on placeholder="enter id to delete" value={id} onChange={e=>setid(e.target.value)} ></input>
            <button onClick={deleteUser}>click to delete</button>
            
        </div>
    )
}
export default Bookde;