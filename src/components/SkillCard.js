import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function SkillCard({skill, tools, desc, icon}){
    return(
        <div className="flex flex-col gap-2 w-[100%] font-montserrat text-secondary p-4 border-complementary  border-y-2 border-opacity-20">
            <FontAwesomeIcon className="h-10 w-10 max-md:h-5 max-md:w-5" icon={icon}></FontAwesomeIcon>
            <h3 className="text-lg font-semibold text-complementary max-md:text-md">{skill}</h3>
            <p className="text-sm max-md:text-xs">{desc}</p>
            <p className="text-sm my-4 font-semibold max-md:text-xs">{tools}</p>
        </div>
    )
}