
import { Link } from "react-scroll";

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    const [navbarActive, setNavbarActive] = useState(false)

    const handleMobileNavbarApply = ()=>{
        setNavbarActive(false)
    }


    return(
        <nav className="absolute top-0 w-[100%] z-50 font-montserrat">
            <div className=" w-[100%]  static  p-4 px-12 flex justify-between font-montserrat text-lg text-secondary items-center drop-shadow-xl ">
                <h1 className="text-6xl font-bold sticky font-special max-md:text-5xl">KE</h1>
                <FontAwesomeIcon onClick={()=>setNavbarActive(!navbarActive)} className="md:hidden h-8 cursor-pointer" icon={faBars}></FontAwesomeIcon>
                <div className="max-md:hidden flex justify-center gap-6 font-semibold items-center">
                    <Link to = "AboutMe" smooth = {true} duration={500} className="p-2 hover:border-b-2 hover:border-solid hover:border-complementary  hover:cursor-pointer hover:justify-start hover:flex text-sm">About</Link>
                    <Link to = "Skills" smooth = {true} duration = {500} className="p-2  hover:border-b-2 hover:border-solid hover:border-complementary hover:cursor-pointer hover:justify-start hover:flex text-sm">Skills</Link>
                    <Link to = "Projects" smooth = {true} duration={500} className="p-2 hover:border-b-2 hover:border-solid hover:border-complementary  hover:cursor-pointer hover:justify-start hover:flex text-sm">Projects</Link>
                    <Link to="Contact" smooth = {true} duration={500} className=" justify-center items-center flex rounded-md bg-complementary p-3 px-6 hover:scale-110 duration-500 hover:cursor-pointer text-primary font-semibold text-sm font-semibold">Contact Me</Link>
                </div>
            </div>
            {navbarActive &&
                (
                    <div className="md:hidden h-screen flex flex-col p-8 bg-primary w-[100%] gap-6 font-semibold text-secondary bg-primary overflow-hidden bg-gradient-to-l from-primary to-fade">
                        <Link onClick={handleMobileNavbarApply} to = "AboutMe" smooth = {true} duration={500} className="p-2 hover:border-b-2 hover:border-solid hover:border-complementary  hover:cursor-pointer hover:justify-start hover:flex text-md">About</Link>
                        <Link onClick={handleMobileNavbarApply} to = "Skills" smooth = {true} duration = {500} className="p-2  hover:border-b-2 hover:border-solid hover:border-complementary hover:cursor-pointer hover:justify-start hover:flex text-md">Skills</Link>
                        <Link onClick={handleMobileNavbarApply} to = "Projects" smooth = {true} duration={500} className="p-2 hover:border-b-2 hover:border-solid hover:border-complementary  hover:cursor-pointer hover:justify-start hover:flex text-md">Projects</Link>
                        <Link onClick={handleMobileNavbarApply} to="Contact" smooth = {true} duration={500} className=" justify-center items-center flex rounded-md bg-complementary p-3 px-6 hover:scale-110 w-fit duration-500 hover:cursor-pointer text-primary font-semibold text-md">Contact Me</Link>
                    </div>
                )}
        </nav>
    )
}