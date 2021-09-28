import React from 'react'

function getApplicationName() { 
  return "Vite with JSX"
}

export const Input = () => { 

  const label = 'Nome'
  let number = -1

  const positiveStyle = { 
    color: '#27ac27'
  }

  const negativeStyle = { 
    color: 'red'
  }

  return (
    <div>
      <label>{label}</label>
      <br />
      <label>{1 + 2}</label>
      <br />
      <label>{getApplicationName()}</label>
      <br />
      <input />
      <br />
      {number > 0 ? <p style={positiveStyle}>Positive</p> : <p style={negativeStyle}>Negative</p>}
    </div>
  )
}