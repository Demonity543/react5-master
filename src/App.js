import "./App.css";
import React, {useState, useEffect} from 'react'

export default function App(props){
  const [dateNow, setDate] = useState(getTime())
  const [seconds, setSeconds ] = React.useState(60);
  const [timerActive, setTimerActive ] = React.useState(false);

  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [ seconds, timerActive ]);

  useEffect( () => {
    setInterval(()=>{
      setDate(getTime())
    },1000)

  }, [])

  function getTime(){
    var date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    return {hours, minutes, seconds}
  }
  

  return(
    <div className="progress-bar">
        <p>{dateNow.hours + ':' + dateNow.minutes + ':' + dateNow.seconds}</p>
        <br></br>
        <div>
      {seconds
        ? <React.Fragment>
            <button id="start" onClick={() => setTimerActive(!timerActive)}>
              {timerActive ? 'stop' : 'start'}
            </button>
            <input type={'range'} id="range" min={0} max={60} value={seconds} onChange={(e) => setSeconds(e.target.value)} />
            <h3>{seconds}</h3>
          </React.Fragment>
        : <button onClick={() => setSeconds(60)}>Again</button>
      }
      <br></br>
    </div>
    <div>
      
    </div>
    </div>
  )
}
