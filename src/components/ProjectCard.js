export default function ProjectCard({name, file, link, skills, desc}){
    return(
        <a href={link} className="relative hover:border-t-4 duration-300 border-complementary hover:cursor-pointer flex flex-col gap-2 w-[100%] text-secondary bg-opacity-0 hover:bg-opacity-10 px-12 max-md:px-2 max-md:py-6 py-8 rounded-2xl bg-secondary   ">

            
            <img className=" w-[100%] h-[225px] max-md:h-[200px] object-center-top object-cover rounded-xl bg-secondary bg-opacity-10" src={file}></img>
            
            <h1 className=" text-xl font-semibold text-complementary">{name}</h1>
            <p className="text-md ">{desc}</p>
            <p className="text-sm mt-4 font-semibold ">{skills}</p>
        </a>
    )
}