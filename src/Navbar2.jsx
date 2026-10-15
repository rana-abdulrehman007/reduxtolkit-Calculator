import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function Navbar2() {


    return (
        <div>
            <nav className='bg-[#49BBBD]' style={{ display: "flex", justifyContent: "space-between", color: "white", padding: "10px 15px" }}>
                <img src="./Navlogo.png" alt="" />
                <ul style={{ display: "flex", gap: "50px", listStyle: "none", marginRight: "20px", padding: "15px" }}>

                    <NavLink to="/"> <li>home</li>
                    </NavLink>
                    <NavLink to="/courses">                    <li>Courses</li>
                    </NavLink>
                    <NavLink to="/careers">                    <li>Careers</li>
                    </NavLink>

                     <NavLink to="/blog">
                        <li>Blog</li>
                    </NavLink>

                    <NavLink to="/about">
                        <li>About us</li>
                    </NavLink> 

                     <NavLink to="/login">
                    <button className='bg-white text-black  h-[60px] w-[160px]  rounded-2xl '>Login</button>
                    </NavLink>
                  <button className='text-white bg-blue-200 rounded-2xl  h-[60px] w-[160px]  text-center'>Sign Up</button>

                </ul>
            </nav>
            <Outlet />
        </div>
    )
}
