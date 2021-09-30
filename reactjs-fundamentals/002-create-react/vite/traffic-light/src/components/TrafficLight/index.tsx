import React, {useState} from 'react';
import './styles.css'

export const TrafficLight = () => {
  const [active, setActive] = useState('')

  const colorLight = [
    {
      id: '1',
      background: 'red',
      message: 'Watch out! wait for the signal to open',
    },
    {
      id: '2',
      background: 'yellow',
      message: 'Attention! Is about to turn red',
    },
    {
      id: '3',
      background: 'green',
      message: 'You can pass!',
    },
  ]

  return (
    <>
      <div className="wrapper-traffic-light">
        {colorLight.map(({id, background }, index ) => (
          <div key={index} className="container">
            <button onClick={() => setActive(id)} style={{background}}></button>
          </div>
        ))}
      </div>
      {colorLight.find((item) => {
        return item.id === active
        })?.message
      }
    </>
  )
}