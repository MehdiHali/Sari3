import {useEffect, useState} from 'react';


function useStopwatch(){
    const [time,setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    let secondes = time%60;
    let minutes = Math.floor(time/60);

    // useEffect(()=>{
    //     if(isRunning) console.log("isRunning");
    //     console.log(time);
    // },[time]);

    function start(){

        // instead of useExecuteOnes we can check if it is not running
        if(!isRunning){
            setIsRunning(true);
            console.log("started");
        }
    }

    function stop() {
        setIsRunning(false);
    }

    function reset(){
        setTime(0);
        setIsRunning(false);
        console.log("reset done ", isRunning);
    }


    useEffect(()=>{
        if(isRunning){
            let id = setInterval(()=>{
                setTime(time=>time+1);
            },1000);
            return ()=>{clearInterval(id)};
        }
    },[isRunning]);

    return [time,minutes,secondes,start,stop,reset];
}

export default useStopwatch;