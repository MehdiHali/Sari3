

let common = (a,b)=>{
    let minLength = Math.min(a.length,b.length);
    for(var i = 0 ; i < minLength ; i++){
        if(a.charAt(i) !== b.charAt(i))
        return i;
    }
    return i;
}

export default common;