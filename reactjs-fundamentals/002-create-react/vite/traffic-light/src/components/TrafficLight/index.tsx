import React, {useState} from 'react';
import './styles.css'

export const TrafficLight = () => {
  const [active, setActive] = useState('')

  const colorLight = [
    {
      background: 'red',
      message: 'Watch out! wait for the signal to open',
      setMessage: () => {
        setActive(colorLight[0].message)
      }
    },
    {
      background: 'yellow',
      message: 'Attention! Is about to turn red',
      setMessage: () => {
        setActive(colorLight[1].message)
      }
    },
    {
      background: 'green',
      message: 'You can pass!',
      setMessage: () => {
        setActive(colorLight[2].message)
      }
    },
  ]

  return (
    <>
      <div className="wrapper-traffic-light">
        {colorLight.map(({background, setMessage }, index ) => (
          <div key={index} className="container">
            <button onClick={setMessage} style={{background}}></button>
          </div>
        ))}
      </div>
      <p>{active}</p>
    </>
  )
}