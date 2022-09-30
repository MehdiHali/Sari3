import {Textarea} from './Textarea.jsx'

export function Hero({input,handleChange,handleFocus,stats}){
    let {time,speed,acc,strokes,err,errRate} = stats;

    return (
        <div className="h-full flex flex-col">
            <Textarea className={"text-2xl h-10 "} input={input} placeholder={"Start typing..."} handleChange={handleChange} handleFocus={handleFocus}  />
            {/* <TagsGroup  tags={[`Speed: ${speed} w/m`,`Time: ${time} s`,`Strokes: ${strokes}`,`Acc.: ${acc}%`,`Err. Rate: ${errRate}%`]} /> */}
            <div className='flex flex-wrap h-full'>
                <div style={{minWidth:"250px"}} className="flex flex-col flex-1 h-full bg-black p-4">
                    {/* <span className='text-gray-100 text-xl'> Progress</span> */}
                    <div style={{color:"#5DBE74"}} className=" pb-4">Speed <br /> <div className='text-4xl'>+ 2.144 %</div></div>
                    <div style={{color:"red"}} className="">Accuracy <br /> <div className='text-4xl'>- 1.220 %</div></div>
                </div>
                <div style={{backgroundColor: "#5DBE74",padding:"1rem",position: "relative",minWidth: "250px",flex:"1"}}>
                        <div className='text-xl'>Best Score</div>
                        <div style={{fontSize:"xxx-large"}}>220 w/m</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={298-70} height={402 - 70} style={{position: "absolute",bottom:"0", right:"0"}} fill="none" viewBox="0 0 250 390">
                            <path fill="#1D1D1D" fill-opacity=".3" d="m92 324-34 64h222V202l-12 30h-88l-50 92H92Z"/>
                        </svg>

                </div>
                <div style={{minWidth:"250px",flex:"1",padding:"1rem"}} className="bg-gray-400 flex flex-col text-lg">
                    <div>time: {time}</div>
                    <div>speed: {speed}</div>
                    <div>Acc: {acc}</div>
                    <div>strokes: {strokes}</div>
                    <div>err: {err}</div>
                    <div>errRate: {errRate}</div>
                </div>
            </div>
        </div>
    )
}