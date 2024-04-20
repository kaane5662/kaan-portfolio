

export default function Skill({file, name}){
    return(

        <div className="flex flex-col justify-center items-center gap-5">
            <img className="w-[100px] h-[100px] object-scale-down " src={file}></img>
            <h2 className="text-center text-2xl ">{name}</h2>
        </div>
    )
}