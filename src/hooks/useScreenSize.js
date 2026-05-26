import {useState,useEffect} from "react";

const useScreenSize = () => { 

    const [width,setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResinze);
        return () => {
            window.removeEventListener("resize", handleResinze);
        };
    }, [])
    
    const handleResinze = () => {
        setWidth(window.innerWidth); 
    }

    return { width }
}

export default useScreenSize;