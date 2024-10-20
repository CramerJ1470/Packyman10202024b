import React, {useEffect,useRef} from 'react';


function useKey(key,cb) {
    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    });

    useEffect(() => {
        function handle(event) {
            if (event.code === key) {
                callbackRef.current(event);
            }   
        }        
        document.addEventListener("keypress",handle);
        return() => document.removeEventListener("keypress",handle);
    
    },[key]);
}

function handleUp() {
    console.log(`Up key pressed`);
}
function handleDown() {
    console.log(`Down key pressed`);
}
function handleLeft() {
    console.log(`Left key pressed`);
}
function handleRight() {
    console.log(`Right key pressed`);
}

export  {useKey,handleLeft,handleUp,handleRight,handleDown};