import Style from '../styles/navbar.module.css'
import { useEffect, useRef, useState } from 'react';
import useStopwatch from '../utils/useStopWatch';
import useExecuteOnes from '../utils/useExecuteOnes';
import useComponentDidUpdate from '../utils/useComponentDidUpdate';
import {BsFillExclamationOctagonFill as CautionIcon} from 'react-icons/bs';
import {BiRun} from 'react-icons/bi';
import {FaCheckCircle} from 'react-icons/fa';
import common from '../utils/util';
import { Hero } from './Hero';
import Progress from './Progress'
function Player({text}) {

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
            <div className='h-full w-full'>
            {/* <h1>Main.Player</h1> */}
                 <div className='w-full flex flex-col justify-between items-center bg-gray-900 p-4 h-1/6'>
                     <p style={{color:state.ERROR?"red":"white"}}  > {text.substring(pos-25,pos-1)} <span style={curr_pos_style}>{text[pos-1]}</span> {text.substring(pos,pos+25)}</p>
                     <Progress className={" w-3/4"} progress={(pos-1)/ text.length*100} />
                 </div>
                 <div className='h-1/3 bg-green-500'>
                 </div>
                 <div className='h-2/3 '>
        
                {/* <Controller  state={state} timer={`${minutes}:${secondes}`} handleRestart={restart} />*/}
                <Hero input={userInput} handleChange={update} handleFocus={Focus}  stats = {{time:time,speed:wpm,acc:accuracy,strokes:strokes,err:errors,errRate:err_rate}}/>
                 </div>
            </div>
    
        //     <span style={state_style}>
        //         {}
        //             READY?<div className={Style.state_modal}><span>READY</span> <CautionIcon size={"1.5em"} style={{background:"none"}}/></div>
        //             :TYPING?<div className={Style.state_modal}><span>TYPING</span> <BiRun size={"1.5em"} style={{background:"none"}}/></div>
        //             :ERROR?<div className={Style.state_modal}><span>WRONG</span> <CautionIcon size={"1.5em"} style={{background:"none"}}/></div>
        //             :COMPLETED?<div className={Style.state_modal}><span>COMPLETED </span> <FaCheckCircle size={"1.5em"} style={{background:"none"}}/></div>
        //             :null
        //         }
        //     </span>
        //     {
        //         COMPLETED &&
        //                 <span style={state_style}>{wpm} WPM</span>
        //                 }

        //         <div className={Style.btns}>
        //             <button className={Style.btn} onClick = {restart} type='text'>restart</button>
        //         {
        //             COMPLETED && 
        //             <button className={Style.btn} type='text'>next</button>
        //         }
        //         </div>
        //         <div className={Style.hero}>
        //             {

        //                 <textarea value={userInput} className={Style.textarea} cols="80" rows="0" onChange={update} onBlur={Focus} autoFocus ></textarea>
        //             }
        //             <div className={Style.brief_states}>
        //                 <span>Timer: <div>{time} s</div></span>
        //                 <span>Strokes: <div>{strokes}</div></span>
        //                 <span>Errors: <div>{errors}</div></span>
        //                 <span>Accuracy: <div>{accuracy}</div></span>
        //                 <span>Error rate: <div>{err_rate}%</div></span>
        //             </div>
        //         </div>
        // </div>
    )
}

export default Player;