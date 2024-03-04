import React, {useCallback, useEffect, useState} from 'react';

const App = () => {
  const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const HandleStart = useCallback(() => {
        setIsActive(true)
    },[])
    const HandleStop = useCallback(() => {
        setIsActive(false)
    },[])
    const HandleReset = useCallback(() => {
        setTime(0)
        setIsActive(false)
    },[])
    useEffect(() => {
        let timeInterval = null
        if (isActive) {
            timeInterval = setInterval(() => {
                setTime(time + 1)
            },1000)
        }else if (!isActive && time !== 0) {
            clearInterval(timeInterval)
        }
        return () => clearInterval(timeInterval)
    }, [isActive, time]);
    return (
        <div className='body'>
            <p>Seconds: {time}</p>
            <div className='buttons'>
                <button onClick={HandleStart}>start</button>
                <button onClick={HandleStop}>stop</button>
                <button onClick={HandleReset}>reset</button>
            </div>
        </div>
    );
};

export default App;