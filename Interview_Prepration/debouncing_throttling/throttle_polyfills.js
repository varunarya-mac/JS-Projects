
const throttle = (cb, waitTime)=> {

    let prveTime = 0;
    return function(...args) {
        let now = new Date().getTime();
        if(now - prveTime > waitTime) {
            prveTime = now;
            return cb(...args);
        }
    }
}