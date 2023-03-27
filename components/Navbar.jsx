import React,{useState,useEffect} from "react"
import Image from "next/image"


function Navbar(){
    return(
        <>
        <nav className="text-white flex items-center gap-[50px] justify-around py-2">
            <Image src="/WONAH_S_SHUTTLE__2_-removebg-preview 3.png" width={100} height={300} alt="logo"/>

            <div>
                <ul className="flex gap-[40px] font-extrabold">
                    <li>Home</li>
                    <li>Destination</li>
                    <li>Your Booking</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li className="bg-white p-2 text-[#3D4957]">Login/Register</li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;