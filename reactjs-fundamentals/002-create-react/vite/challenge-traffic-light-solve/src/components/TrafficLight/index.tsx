import React, {useState} from 'react'
import './styles.css'

export const TrafficLight = () => { 

  const [selected, setSelected] = useState<"red" | "yellow" | "green">()

  return (
    <div className="container">
      <div className="traffic-light">
        <button className={`red ${selected === 'red' ? 'selected' : ''}`} onClick={() => setSelected("red")}></button>
        <button className={`yellow ${selected === 'yellow' ? 'selected' : ''}`} onClick={() => setSelected("yellow")}></button>
        <button className={`green ${selected === 'green' ? 'selected' : ''}`} onClick={() => setSelected("green")}></button>
      </div>
      <div className="info">
        {selected === 'red' && <span>Watch out! wait for the signal to open</span>}
        {selected === 'yellow' && <span>Attention! Is about to turn red</span>}
        {selected === 'green' && <span>You can pass!</span>}
      </div>
    </div>
  )
}