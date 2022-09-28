
const LeftNav = ({units}) =>{

    return (
        <div className="w-1/4 text-gray-200 hidden md:block">
            <ul className="p-4">
        {units && units.map((unit,i)=>{
            return <li className="cursor-pointer hover:bg-green-400 hover:text-black"><span>Unit {i+1}</span><span className="p-2 ">{unit.title.split('').map(letter=>{return <span className="bg-green-400 px-1 text-sm text-black rounded-full">{letter}</span>})}</span></li>
        })}
        {!units && "No Units"}
            </ul>
       </div>
    )
}


export default LeftNav;