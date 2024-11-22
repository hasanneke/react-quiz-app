import {useState, useEffect} from 'react'

export default function QuestionTimer({timeout, onTimeout}) {
    const [remaining, setRemaining] = useState(timeout);

    useEffect(() => {
        console.log("SET TIMEOUT");
        setTimeout(onTimeout, timeout);
        return () => clearTimeout(timeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("SET INTERVAL");
        const interval = setInterval(()=>{
            setRemaining(prevRemainingTime => prevRemainingTime - 100);
        },100);
        return () => clearInterval(interval);
    }, []);

    return <progress id="question-time" max={timeout} value={remaining}/>;
}