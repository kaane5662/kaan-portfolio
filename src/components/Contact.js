import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

export default function Contact(){
    return (
        <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            y: 0,  
            scale: 1, 
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
        name="Contact" className="px-28 py-8 max-md:px-4 text-secondary font-montserrat min-h-screen flex-col justify-center items-center flex ">
                
                <form method="POST" action="https://getform.io/f/548dbc0e-7468-43a3-b01a-5e061b3c3c1c" className="justify-center items-center grid grid-cols-2 w-[80%] max-md:w-[100%] gap-4 max-md:gap-2">
                    <h1 className=" text-5xl font-bold col-span-2 text-center max-md:text-3xl">Get In Touch</h1>
                    <div className="w-[100%] flex flex-col gap-2">
                        <h3 className="text-sm">Name</h3>
                        <input name = "name" className="w-[100%] border-opacity-20 border-secondary border-2 bg-opacity-0 bg-white p-2 text-md rounded-md text-secondary max-md:text-sm" type="text" placeholder="Enter your name..."></input>
                    </div>
                    <div className="w-[100%] flex flex-col gap-2">
                        <h3 className="text-sm">Email</h3>
                        <input name = "email" className="w-[100%] border-opacity-20 border-secondary border-2 bg-opacity-0 bg-white p-2 text-md rounded-md text-secondary max-md:text-sm" type="text" placeholder="Enter your email..."></input>
                    </div>
                    <div className="w-[100%] flex flex-col gap-2 col-span-2">
                        <h3 className="text-sm">Message</h3>
                        <textarea className=" border-opacity-20 bg-opacity-0 bg-white border-secondary border-2 p-2 rounded-md h-[250px] text-secondary max-md:text-sm" type="text" placeholder="Enter message..." name = "message"></textarea>    
                    </div>
                    
                    
                    <button className="col-span-2 text-md p-3 bold rounded-lg bg-complementary text-primary hover:bg-secondary font-semibold duration-500" type="submit">Send Message</button>
                    <div className="flex justify-center gap-8 col-span-2">
                        <a href="https://linkedin.com/in/kaan-eren-29600a304"><svg className="bg-complementary w-8 h-8 rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                        <a href="mailto:kaaneren495@gmail.com"><FontAwesomeIcon className="h-8 w-8 text-complementary" icon={faEnvelope} ></FontAwesomeIcon></a>
                        {/* <a href="/"><svg className="bg-complementary w-8 h-8 rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg></a> */}
                    </div>
            </form> 

            


            {/* <form method="POST" action="https://getform.io/f/548dbc0e-7468-43a3-b01a-5e061b3c3c1c" className="my-12 flex  flex-col justify-center gap-8 w-[80%]">
                <input name = "name" className="w-[100%] bg-secondary p-4 text-xl rounded-md text-primary" type="text" placeholder="Name"></input>
                <input name = "email" className="w-[100%] bg-secondary p-4 text-xl rounded-md text-primary" type="text" placeholder="Email"></input>
                <textarea className="w-[100%] bg-secondary p-4 text-xl rounded-md h-[250px] text-primary" type="text" placeholder="Message" name = "message"></textarea>
                <button className=" text-2xl p-4 border-2 font-bold rounded-lg border-complementary hover:bg-complementary hover:scale-105 duration-500" type="submit">Let's Collaborate</button>
            </form> */}
        </motion.div>
    )
}