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
        name = "Intro" className="p-24 flex justify-center text-secondary font-tilt items-center ">
            <div className="flex flex-col gap-4 w-[50%]">
                <h1 className=" text-6xl font-bold">KAAN EREN</h1>
                <h2 className="text-4xl font-bold">I AM A <span className=" text-complementary ">FULL STACK DEVELOPER</span></h2>
                <p className=" text-2xl">I can create backend REST APIs with CRUD functionality using relational databases and make user friendly front end interfaces with dynamic routing</p>
                <br></br>
                <div className="flex items-center gap-8">

                    <Link to = "Projects" smooth = {true} duration={500}  className=" justify-center flex items-center hover:cursor-pointer rounded-lg border-2 border-solid border-complementary w-[250px] h-[65px] text-xl font-bold hover:bg-complementary hover:text-secondary duration-1000 hover:scale-110">View Projects</Link>
                    <a href="https://drive.google.com/file/d/1Y7vTRq7asTvahQDe6-OEQve9VoUy3ddB/view?usp=sharing"  className=" justify-center flex items-center hover:cursor-pointer rounded-lg bg-complementary w-[250px] h-[65px] text-xl font-bold hover:bg-complementary hover:text-secondary duration-1000 hover:scale-110">Download CV</a>
                </div>
            </div>
            <div className=" p-8 w-[50%] flex justify-center">
                <div className="w-[300px] h-[300px] flex justify-center bg-complementary rounded-full -skew-x-6">
                    {/*      */}
                </div>
            </div>
            
        </motion.div>
    )
}