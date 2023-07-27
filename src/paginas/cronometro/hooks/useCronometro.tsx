import { useEffect, useState } from "react";

export default function useCronometro() {
    const [diff, setDiff] = useState(null)
    const [initial, setInitial] = useState(null)
    const [pause,setPause] = useState(false)
    const [stop,setStop] = useState(false)

    const tick = () =>{
        setDiff(new Date(+new Date() - initial))
    }

    useEffect(() => {
        if(initial&&!pause&&!stop){
            requestAnimationFrame(tick);
        }
        if(stop){
            setDiff(null)
            setInitial(null)
        }
    },[initial])

    useEffect(() => {
        if(diff&&!pause&&!stop){
            requestAnimationFrame(tick);
        }
        if(stop){
            setDiff(null)
            setInitial(null)
        }
    },[diff])

    useEffect(() => {
        if(stop){
            setDiff(null)
            setInitial(null)
        }
    },[stop])

    const startC = () => {
        setPause(false)
        setStop(false)
        setInitial(+new Date())
    }

    const pauseC = () => {
        if(diff){
            if(pause){
                requestAnimationFrame(tick);
            }
            setPause(!pause)
        }
    }

    const stopC = () => {
        if(diff){
            setStop(true)
            setPause(false)
        }
    }

    const timeFormat = (tm:any) => {
        
        if(!tm) return "00:00:00.00"
        let hh = tm.getUTCHours()
        let mm = tm.getUTCMinutes()
        let ss = tm.getSeconds()
        let cm:any = Math.round(tm.getMilliseconds()/10)
      
        hh = hh < 10 ? "0"+hh : hh
        mm = mm < 10 ? "0"+mm : mm
        ss = ss < 10 ? "0"+ss : ss
        cm = cm < 10 ? "0"+cm : cm
      
        return `${hh}:${mm}:${ss}.${cm}`
    }

    return {startC,pauseC,stopC,timeFormat,pause,diff}
}