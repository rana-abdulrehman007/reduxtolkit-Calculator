// import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'


// export default function Navbar2() {


//     return (
//         <div>
//             <nav className='bg-[#49BBBD]' style={{ display: "flex", justifyContent: "space-between", color: "white", padding: "10px 15px" }}>
//                 <img src="./Navlogo.png" alt="" />
//                 <ul className='hidden lg:flex' style={{ display: "flex", gap: "50px", listStyle: "none", marginRight: "20px", padding: "15px" }}>

//                     <NavLink to="/"> <li>home</li>
//                     </NavLink>
//                     <NavLink to="/courses">                    <li>Courses</li>
//                     </NavLink>
//                     <NavLink to="/careers">                    <li>Careers</li>
//                     </NavLink>

//                     <NavLink to="/blog">
//                         <li>Blog</li>
//                     </NavLink>

//                     {/* <NavLink to="/about">
//                         <li>About us</li>
//                     </NavLink> */}

//                     <NavLink to="/search">
//                         <li>Search</li>
//                     </NavLink>



//                     <NavLink to="/login">
//                         <button className='bg-white text-black  h-[60px] w-[160px]  rounded-2xl '>Login</button>
//                     </NavLink>
//                     <button className='text-white bg-blue-200 rounded-2xl  h-[60px] w-[160px]  text-center'>Sign Up</button>

//                 </ul>
//             </nav>
//             <Outlet />
//         </div>
//     )
// }



import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/careers', label: 'Careers' },
    { to: '/blog', label: 'Blog' },
    { to: '/search', label: 'Search' },
]

export default function Navbar2() {
    const [open, setOpen] = useState(false)

    const linkClass = ({ isActive }) =>
        isActive ? 'font-bold underline' : 'hover:underline'

    return (
        <div>
            <nav className="bg-[#49BBBD] text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">

                    {/* Logo */}
                    <NavLink to="/">
                        <img src="/Navlogo.png" alt="TOTC logo" className="h-8 w-auto md:h-10" />
                    </NavLink>

                    {/* Desktop menu: lg (1024px) se upar dikhega */}
                    <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
                        {links.map((item) => (
                            <li key={item.to}>
                                <NavLink to={item.to} className={linkClass}>{item.label}</NavLink>
                            </li>
                        ))}
                        <li>
                            <NavLink
                                to="/login"
                                className="flex h-12 w-32 items-center justify-center rounded-2xl bg-white text-black xl:h-[60px] xl:w-[160px]"
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <button className="h-12 w-32 rounded-2xl bg-blue-200 text-black xl:h-[60px] xl:w-[160px]">
                                Sign Up
                            </button>
                        </li>
                    </ul>

                    {/* Hamburger button: lg se neeche dikhega */}
                    <button
                        className="text-3xl lg:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile/Tablet menu: sirf open hone par, aur lg se upar kabhi nahi */}
                {open && (
                    <ul className="flex flex-col gap-4 px-4 pb-6 lg:hidden">
                        {links.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className={linkClass}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                        <li className="flex flex-col gap-3 pt-2 sm:flex-row">
                            <NavLink
                                to="/login"
                                onClick={() => setOpen(false)}
                                className="flex h-12 flex-1 items-center justify-center rounded-2xl bg-white text-black"
                            >
                                Login
                            </NavLink>
                            <button className="h-12 flex-1 rounded-2xl bg-blue-200 text-black">
                                Sign Up
                            </button>
                        </li>
                    </ul>
                )}
            </nav>

            <Outlet />
        </div>
    )
}