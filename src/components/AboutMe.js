import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

export default function AboutMe(){
    return(
        <div name = "AboutMe" className="  flex flex-col justify-center items-center px-28 max-md:px-4 text-secondary h-screen font-montserrat">
            <motion.div 
            initial={{
                y: "100%",
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
                stiffness: 50
            }}
            viewport={{ once: false }}
            className="  flex flex-col max-md:gap-5  gap-10 justify-center max-md:px-0">
                <h1 className=" text-5xl font-bold max-md:text-3xl  ">About Me</h1>
                <h1 className="text-3xl  max-md:px-0 max-md:text-xl ">Hi, I'm <span className=" text-complementary">Kaan</span>, nice to meet you. Please take a look around.</h1>
                <p className="text-md text-white text-opacity-80  max-md:text-xs">
                I'm a versatile software engineer with a focus on building holistic, cutting-edge solutions. With a knack for AI-driven systems, I specialize in natural language processing and machine learning to create intuitive user experiences. I'm equally adept at frontend development, crafting sleek interfaces using modern frameworks like React and Next.js. Beyond that, I excel in integrating secure payment systems, leveraging platforms like Stripe to facilitate seamless transactions and implementing marketplace systems. Additionally, I'm passionate about automation, streamlining processes to increase efficiency and productivity. Whether it's securing backend APIs, optimizing databases, or implementing frontend designs, I'm dedicated to delivering robust, scalable solutions that push the boundaries of innovation. Let's collaborate and bring your vision to life!</p>
                <div className="flex flex-col gap-4 my-12">
                    <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>

                    <p className="text-sm font-semibold text-center max-md:text-xs">   Javascript | Typescript | Python | SQL | Bash | C | C# | Java</p>
                </div>
            </motion.div>
        </div>
    )
}