import { useEffect, useRef, useState } from 'react';
import useStopwatch from '../utils/useStopWatch';
import useExecuteOnes from '../utils/useExecuteOnes';
import useComponentDidUpdate from '../utils/useComponentDidUpdate';
import {BsFillExclamationOctagonFill as CautionIcon} from 'react-icons/bs';
import {BiRefresh, BiRun} from 'react-icons/bi';
import {FaCheckCircle, FaHandPaper} from 'react-icons/fa';
import common from '../utils/util';
import { Hero } from './Hero';
import Progress from './Progress'
import Style from '../styles/Player.module.css'
import { HiHand, HiOutlineRefresh, HiRefresh } from 'react-icons/hi';
import {TiArrowSortedDown} from 'react-icons/ti'
import {MdOutlineDownloadDone} from 'react-icons/md'
import LeftNav from './LeftNav';

function Player({text,guide,units,currUnit}) {

    const [state,setState] = useState({
        READY:true,
        TYPING:false,
        ERROR:false,
        COMPLETED:false
    })

    const [userInput,setUserInput] = useState('');
    const [pos,setPos] = useState(1);
    const [strokes,setStrokes] = useState(0);
    const [corr,setCorr] = useState(0);
    const [time,minutes,secondes,start,stop,reset] = useStopwatch();
    
    let {READY,TYPING,ERROR,COMPLETED} = state;
    let errors = strokes-corr;
    let err_rate = strokes?Math.round((errors/strokes)*100):0;
    let accuracy = strokes?Math.round((corr/strokes)*100):0;
    let wpm = time?Math.round(text.split(' ').length / time*60):0;
    let stateString = state.READY?"Ready":state.TYPING?"GO":state.ERROR?"Error":state.COMPLETED?"Completed":null;

    // this hook starts the application
    useEffect(()=>{
        if(TYPING || ERROR) start();
    },[state]);

    // this hook stops the application 
    useEffect(()=>{
        if(COMPLETED) stop();
    },[state]);

    // lifting up a reference of the child to the parent
    useEffect(()=>{
    },[]);


    function update(ev) {
        console.log("UPDATING");
        if(!COMPLETED){
            console.log("update: ",ev.target.value);
            setStrokes( strokes + 1);
            // will the setPos execute before the useEffect or after it ??
            setUserInput(ev.target.value);
        }
    }

    function Focus(ev){
        ev.target.focus();
    }

    useComponentDidUpdate( test , [userInput] );

    function test() {
        if(userInput){

            if(userInput == text){
                setPos(pos+1);
                setCorr(corr+1);
                setState({READY:false,TYPING:false,ERROR:false,COMPLETED:true});
            }
            
            else {
                // console.log("common ,,,");
                // console.log('userInput', userInput);
                // console.log(text);
                // console.log("common: ",common("abc","ab"));
                // console.log('pos', pos);
                let newPos = common(userInput,text)+1;
                setPos(newPos);
                if(newPos <= userInput.length){
                    setState({READY:false,TYPING:false,ERROR:true,COMPLETED:false});
                }
                else{
                    setCorr(corr+1);
                    setState({READY:false,TYPING:true,ERROR:false,COMPLETED:false});
                }
            }
    }
        
}

        function restart(ev) {
            setState({READY:true, TYPING: false, ERROR: false, COMPLETED: false});
            setStrokes(0);
            setCorr(0);
            setPos(1);
            setUserInput("");
            reset();
            console.log(document.getElementsByTagName['textarea'][0]);
        }

        let curr_pos_style = {
            width:"5px",
            backgroundColor: "#121212",
            margin: "0",
            padding: "3px",
            paddingTop: "6px",
            borderBottom: " 2px white solid",
        }

        let state_style = {
            padding:"1rem",
            borderRadius:"4px",
            backgroundColor: ERROR?"red":COMPLETED?"green":"blue",
        }

        return (
            <div className='flex w-screen '>

            <LeftNav restart={restart} units={units} guide={guide} currUnit={currUnit} />
                <div className={' h-full w-full overflow-scroll overflow-x-hidden noScrollbar'}>
                {/* <h1>Main.Player</h1> */}
                <div className='flex  h-1/3'>
                    <TiArrowSortedDown className='text-green-400 rotate-90 cursor-pointer hover:scale-105 my-auto ' size={100} />
                    <div style={{whiteSpace: "1"}} className='w-full flex flex-col justify-center items-center text-lg sm:text-4xl bg-gray-900 p-4'>
                        <p style={{color:state.ERROR?"red":"white"}}  > {text.substring(pos-25,pos-1)} <span className='bg-green-400 text-black py-2 px-1 rounded'>{text[pos-1]===" "?"__":text[pos-1]}</span> {text.substring(pos,pos+25)}</p>
                        {/* <Progress className={" w-3/4"} progress={(pos-1)/ text.length*100} /> */}
                    </div>
                    <TiArrowSortedDown className='text-green-400 -rotate-90 cursor-pointer hover:scale-105 my-auto ' size={100} />
                </div>
                    <div className='h-1/6  flex'>
                        {/* <div className='flex-1'>{guide}</div>  */}
                        <div className='flex-1 p-4 text-xl  relative'><div style={{width: (pos-1)/ text.length*100+"%"}} className='bg-green-400 h-full absolute top-0 left-0'></div><div className='absolute flex space-x-4 items-center'> <span className='z-50 text-xl'> Timer </span><div className='text-6xl'>{time} s</div></div></div>
                        <div className='text-xl bg-transparent flex-2 px-4 grid content-center'><HiRefresh size={50} className="mx-auto cursor-pointer hover:rotate-90 text-white" onClick={restart} /></div>
                        <div className={"bg-black flex-2 p-4 flex justify-around items-center "+(state.ERROR?"text-red":state.TYPING?"text-green-400":"text-white")}>
                            <div className='text-3xl'>{state.COMPLETED?"Completed":READY?"Ready":state.TYPING?"GO":state.ERROR?<span className='text-red-500'>Error</span>:"state"}</div>
                            <div className='text-xl '>{state.COMPLETED?<MdOutlineDownloadDone size={50} className="mx-auto  " />:READY?<HiHand size={40} className="text-white mx-auto" />:state.TYPING?<BiRun size={50} className="text-green-400 mx-auto" />:state.ERROR?<CautionIcon size={50} className="text-red-500 mx-auto" />:"state"}</div>
                        </div>
                        
                    </div>
                    <div className='h-3/6 '>
            
                    {/* <Controller  state={state} timer={`${minutes}:${secondes}`} handleRestart={restart} />*/}
                    <Hero input={userInput} handleChange={update} handleFocus={Focus}  stats = {{time:time,speed:wpm,acc:accuracy,strokes:strokes,err:errors,errRate:err_rate}}/>
                    </div>
                </div>
            </div>
        )
}

export default Player