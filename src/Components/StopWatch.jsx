import { useState, useRef, useEffect } from "react";
import useStopwatch from "../utils/useStopWatch";
import useExecuteOnes from '../utils/useExecuteOnes';


function StopWatch(){
    const [time,start,stop,restart] = useStopwatch();

    useExecuteOnes(start,[]);

    return <span>{time}</span>
}

export default StopWatch;