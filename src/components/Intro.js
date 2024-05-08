import { Link } from "react-scroll"
import { motion } from "framer-motion"
export default function Intro(){
    return (
        <motion.div 
        initial={{
            opacity: 0,
            hidden: "true"
        }}
        whileInView={{
            x: 0,
            y: 0,   
            rotate: 0,
            opacity: 1
        }}
        transition={{
            duration: 2,
            type:"spring",
            damping: 10,
            stiffness: 20
        }}
        viewport={{ once: false }}
        name = "Intro" className="p-24 max-md:p-4 max-md:flex-col-reverse flex justify-center max-md:flex-col text-secondary font-montserrat items-center min-h-screen ">
            <div className="flex flex-col gap-4 max-md:gap-2 w-[50%] max-md:w-[100%]">
                <h3 className="text-lg max-md:text-sm">Hi there, I'm</h3>
                <h1 className=" text-6xl font-bold max-md:text-2xl">KAAN EREN</h1>
                <h2 className="text-4xl font-semibold text-complementary max-md:text-xl">Software Developer</h2>
                <p className=" text-lg max-md:text-sm ">Experienced developer with over 2+ years of hands-on experience in delivering dynamic digital solutions</p>
                <br></br>
                <div className="flex items-center gap-8 max-md:w-[100%]">

                    <Link to = "Projects" smooth = {true} duration={500}  className=" justify-center flex items-center hover:cursor-pointer rounded-md border-2 border-solid border-complementary  text-md font-semibold duration-300 hover:scale-110 p-4 px-8 max-md:py-1">View Projects</Link>
                    <a href="https://drive.google.com/file/d/13lI1Sl2D92VdpT8re62-fl9DzKn5scLs/view?usp=sharing"  className=" justify-center flex items-center hover:cursor-pointer rounded-md bg-complementary text-md font-semibold hover:bg-complementary  duration-300 hover:scale-110 p-4 px-8 text-primary max-md:py-2">Download CV</a>
                </div>
            </div>
            <div className=" p-8 w-[50%] flex justify-center">
                <div className="w-[300px] h-[300px] max-md:h-[100px] max-md:w-[100px] flex justify-center bg-complementary rounded-full -skew-x-12 z-10">
                        
                </div>
            </div>
            
        </motion.div>
    )
}