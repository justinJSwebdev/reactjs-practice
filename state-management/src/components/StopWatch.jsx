import { useRef, useState } from 'react'

export default function StopWatch() {
    const [count, setCount] = useState(0);
    const refClock = useRef(null);
    const handleClickStart = () => {
        refClock.current = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
    };
    const handleClickStop = () => {
        clearInterval(refClock.current);
        refClock.current = null
    }
    return <>
        <div>{count}</div>
        <button onClick={handleClickStart}>Start</button>
        <button onClick={handleClickStop}>Stop</button>
    </>
}
