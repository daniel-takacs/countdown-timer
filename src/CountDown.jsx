import React, {useState, useEffect} from 'react';
import './App.css';


function CountDown() {

    const [getSeconds, showSeconds] = useState('')

    const newDate = "March 1 2021"
    const timeNow = new Date();
    const targetDate = new Date(newDate)

    
    const secondsLeft = Math.floor((targetDate - timeNow) / 1000)

    const days = Math.floor((secondsLeft / 3600) / 24 ) 
    const hours = Math.floor(secondsLeft / 3600)
    const minutes = Math.floor(secondsLeft / 60)
    
    //console.log(seconds)
    useEffect(()=> {
        const interval = setInterval(()=> {
            showSeconds(()=> days)
        }, 1000);
        return ()=> clearInterval(interval)
    })

    return (
        <div className="container">
            <ul>
                <li>Days</li>
                <li>Hours</li>
                <li>Minutes</li>
                <li>{getSeconds}</li>
            </ul>
        </div>
    )
}

export default CountDown
