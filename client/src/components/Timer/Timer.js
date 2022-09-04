import { useEffect, useState } from "react";

const Timer = () => {
    const [second, setSecond] = useState(0);
    const [minut, setMinut] = useState(0);
    const [stop, setStop] = useState(true);
    useEffect(() => {
        if(stop === false){
            setInterval(() => setSecond(second+1), 1000);
            setInterval(() => setSecond(minut+1), 60000);
            if(second === 60) {
                setSecond(0);
            }
        }
        return;
    }, [second, minut, stop])

    const handleStopClick = () => {
        if(stop === false) {
            setStop(true);
            setSecond(0)
            setMinut(0)
        } else {
            setStop(false);
        }
        
    } 

    return(
        <div className="dark:text-white">
            { minut + ":" + second}
            <button className="ml-2" onClick={handleStopClick}>start</button>
        </div>
    )



}

export default Timer;
