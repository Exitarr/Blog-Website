import { useState,useEffect } from "react";

const useWindowSize = () =>{
    const [windowSize , setWindowSize] = useState({
        width :undefined,
        height :undefined
    });

    useEffect(()=>{
       const handResize = () =>{
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        });
       }

       handResize();

       window.addEventListener("resize",handResize);
       
       window.removeEventListener("resize",handResize);
    })
    return windowSize;
}   

export default useWindowSize;