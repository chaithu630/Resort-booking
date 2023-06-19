import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Web from "./webp";
import Hello from "./form";
import Resort from "./resorts";
import Contact from "./contact";
import Book from "./book";
import Facility from "./facilities";
import Loginm from "./Loginm";
import Bookde from "./bookingdeatiles";
import Main from "./details";
var Path=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Hello/>}></Route>
            <Route path="/login" element={<Loginm/>}></Route>
            <Route path="/bookingdea" element={<Bookde/>}></Route>
            <Route path="/resort" element={<Resort/>}></Route>
            <Route path="/home" element={<Web/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route  path="/form" element={<Hello/>}></Route>
            <Route  path="/book"element={<Book/>}></Route>
            <Route path="/facility" element={<Facility/>}></Route>
            <Route  path="/view"element={<Main/>}></Route>
            

            
        </Routes>
        </BrowserRouter>
    )
}
export default Path;