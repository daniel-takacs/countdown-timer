import React, {useState, useEffect} from 'react';
import './App.css';


function CountDown() {

    const [Timer, showTimer] = useState('')

    const newDate = "March 1 2021"
    const timeNow = new Date();
    const targetDate = new Date(newDate)

    
    const secondsLeft = Math.floor((targetDate - timeNow) / 1000)

    const days = Math.floor((secondsLeft / 3600) / 24 ) 
    const hours = Math.floor((secondsLeft / 3600) % 24) 
    const minutes = Math.floor((secondsLeft / 60) % 60)
    const seconds = Math.floor((secondsLeft % 60))

    
    //console.log(seconds)
    useEffect(()=> {
        const interval = setInterval(()=> {
            showTimer(()=> secondsLeft)
        }, 1000);
        return ()=> clearInterval(interval)
    })

    return (
        <div className="container">
                <div className="days"><p>{days}</p><span>days</span></div>
                <div className="hours"><p>{hours}</p><span>hours</span></div>
                <div className="minutes"><p>{minutes}</p><span>minutes</span></div>
                <div className="seconds"><p>{seconds}</p><span>seconds</span></div>
        </div>
    )
}

export default CountDown
