
const LeftNav = ({units,guide,currUnit,goToUnit}) =>{

    return (
        <div className="w-1/4 hidden md:block ">

        <div className="bg-black overflow-scroll noScrollbar  text-gray-200  h-1/2  border-b-2 border-b-green-400 p-4">
            <h1 className="text-xl">Units</h1>
            <ul className="p-4">
        {units && units.map((unit,i)=>{
            return <li key={i} onClick={()=>{goToUnit({unitNo:i,subUnitNo:0})}} className="cursor-pointer hover:bg-green-400 hover:text-black p-2"><span>Unit {i+1}</span><span className="p-2 ">{unit.title.split('').map(letter=>{return <span className="bg-green-400 px-1 text-sm text-black rounded-full">{letter}</span>})}</span></li>
        })}
        {!units && "No Units"}
            </ul>
       </div>
       <div className="bg-black text-gray-200 p-4 h-1/2 overflow-scroll noScrollbar">
        <h1 className="text-xl">Guide Unit {currUnit+1}</h1>
        <p className="p-4">
        {guide}
        </p>
       </div>
        </div>
    )
}


export default LeftNav;