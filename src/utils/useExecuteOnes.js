import {useEffect,useRef} from 'react';

function useExecuteOnes(cb,dep){
    const executed = useRef(false);
    useEffect(()=>{
        if(!executed.current){
            cb();
            executed.current = true;
        }
    },dep);
}

export default useExecuteOnes;