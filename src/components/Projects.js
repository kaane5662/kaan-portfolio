import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectCard from "./ProjectCard"
import { AnimatePresence, motion } from "framer-motion"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"


export default function Projects(){



    const [Projects, setProjects] = useState([])
    const [pages, setPages] = useState(0)
    const [page, setPage] = useState(0)
    const [pageLength, setPageLength] = useState(2)

    const switchIndex = (dir)=>{
        let pageTemp;
        if(dir < 0) pageTemp = Math.max(0, page+dir)
        if(dir > 0) pageTemp = Math.min(pages, page+dir)
        console.log(pageTemp)
        setPage(pageTemp)
    }

    const getProjects = async ()=>{
        let projects = await fetch("/projects.json")
        let projectsData = await projects.json()
        setProjects(projectsData)
    }

    const renderDots =  ()=>{
        const dots = []
        for (let i = 0; i < pages+1; i++) {
            dots.push(
              <div
                onClick={()=>setPage(i)}
                key={i}
                className={`rounded-full max-md:h-2 max-md:w-2 h-3 hover:cursor-pointer hover:scale-105 w-3 ${page === i ? 'bg-complementary' : 'bg-secondary bg-opacity-20'}`}
              ></div>
            );
        }
        return dots
    }


    useEffect(()=>{
        getProjects()
    },[])

    const handleResize = () => {
        // do magic for resize
           let tempPageLength = 2;
           console.log(window.innerWidth)
           if(window.innerWidth < 770){
               tempPageLength = 1
           }else{
               tempPageLength = 2
           }
           console.log(Projects.length)
           setPageLength(tempPageLength)
           setPages( Math.floor(Projects.length / tempPageLength))
    }



    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => {
         window.removeEventListener('resize', handleResize);
        };
        
    }, [Projects]);

    return (
        <div name = "Projects" className=" px-28 max-md:px-2 py-8 text-secondary font-montserrat min-h-screen flex-col justify-center items-center flex gap-8">
            <div className="flex justify-between w-[100%] items-center">
                <h4 onClick={()=>switchIndex(-1)} className=" p-1 h-fit px-3 rounded-full text-primary bg-complementary hover:scale-105 duration-300 cursor-pointer hover:bg-secondary text-2xl max-md:text-lg font-bold" >{"<"}</h4>   
                <h1 className=" text-5xl font-bold max-md:text-3xl text-center w-[50%]">Project Showcase</h1>
                <h4 onClick={()=>switchIndex(1)} className=" p-1 h-fit px-3 rounded-full text-primary bg-complementary hover:scale-105 duration-300 hover:bg-secondary cursor-pointer text-2xl max-md:text-lg font-bold" >{">"}</h4>

            </div>
            <AnimatePresence mode="wait" initial={false} custom={page}>
                
                <motion.div 
                key={page}
                initial={{ opacity: 0, x: '0%', scale: 0 }}
                animate={{ opacity: 1, x: '0%', scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: .5,
                  ease: 'easeInOut'
                }} 
            className=" grid grid-cols-2 max-md:grid-cols-1 gap-8 overflow-hidden relative   ">
                {Projects.slice(page*pageLength, page*pageLength+pageLength).map((project, index)=>{
                    return(
                        <ProjectCard key={index} skills={project.skills} link = {project.link} name = {project.name} desc={project.desc} file= {project.file}></ProjectCard>
                    )
                })}

                    
                
                    
                    
                </motion.div>
            </AnimatePresence>

            <div className = "flex gap-8 justify-center">{renderDots()}</div>
            

        </div>

    )
}