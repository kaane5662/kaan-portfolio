import Skill from "./Skill"
import { motion } from "framer-motion"
import { useState } from "react"
import SkillCard from "./SkillCard"
import { faBank, faDatabase, faDisplay, faGears, faLaptop, faRobot, faServer } from "@fortawesome/free-solid-svg-icons"

export default function Skills(){
    return (
        <div name = "Skills" className=" my-32 px-28 max-md:px-4 py-8 flex flex-col gap-12 font-montserrat text-secondary font-tilt overflow-hidden max-w-[100vw] min-h-screen">
            <h1 className=" text-5xl font-bold max-md:text-3xl ">Skills</h1>
            <motion.div 
            initial={{
                x: "100%",
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
            className="grid grid-cols-3 max-md:grid-cols-1 ">
                <SkillCard desc={"Expert in designing engaging, animated, mobile responsive UI screens with SEO"} skill={"Frontend"} tools={"React | Next.js | HTML/CSS | Redux.js | TailwindCSS"} icon={faDisplay}></SkillCard>
                <SkillCard desc={"Proficient in creating scalable, structured, and secure REST APIs for HTTP request handling and protecting user data"} skill={"Backend"} tools={"NodeJS | Express.js | Django | Next.js | Flask | JWT | OAuth"} icon={faServer}></SkillCard>
                <SkillCard desc={"Expert in creating advanced queries and composing schemas or tables for efficient storage and retrieval"} skill={"Databases"} tools={"MongoDB | Firebase | PostgreSQL | AstraDB "} icon={faDatabase }></SkillCard>
                <SkillCard desc={"Expert in implementing secure marketplace systems or payment processing solutions"} skill={"Payment"} tools={"Stripe | Stripe Connect "} icon={faBank }></SkillCard>
                <SkillCard desc={"Proficient in scraping data and integrating AI solutions to enhance system intelligence and functionality using LLMs or machine learning models"} skill={"AI/ML | Web Scraping | Automation"} tools={"OpenAI | Langchain | SciKit-Learn | Pandas | Selenium | BeautifulSoup | Scrapy"} icon={faRobot    }></SkillCard>
                <SkillCard desc={"Proficient in utilizing cloud based hosting services for scalability and efficiency"} skill={"Deployment"} tools={"AWS | Render | Netlify | Vercel"} icon={faGears    }></SkillCard>
                
                {/* <Skill file = "django-logo.png" name = "Django"/>
                <Skill file = "nodejs-logo.png" name = "NodeJS"/>
                <Skill file = "expressjs-logo.png" name = "ExpressJS"/>
                <Skill file = "mongodb-logo.png" name = "MongoDB"/>
                <Skill file = "postgresql-logo.png" name = "PostgreSQL"/>
                <Skill file = "firebase-logo.png" name = "Firebase"/>
                <Skill file = "nextjs-logo.png" name = "NextJS"/>
                <Skill file = "html-logo.png" name = "HTML"/>
                <Skill file = "css-logo.png" name = "CSS"/>
                <Skill file = "tailwindcss-logo.png" name = "TailwindCSS"/>
                <Skill file = "logo512.png" name = "ReactJS"/>
                <Skill file = "logo512.png" name = "React Native"/>
                <Skill file = "unity-logo.png" name = "Unity"/>
                <Skill file = "jwt-logo.png" name = "JWT"/>
                <Skill file = "roblox-studio.png" name = "Roblox Studio"/> */}
                 
            </motion.div>
        </div>
        
    )
}