import {useEffect, useRef} from 'react';

function useComponentDidUpdate(cb,dep) {
    const mounted = useRef(false);

    useEffect(()=>{
        if(mounted.current)
        cb();
        else 
        mounted.current = true;
},dep)
}
export default useComponentDidUpdate;