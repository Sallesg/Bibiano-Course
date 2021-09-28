import React from 'react'

type InputProps = { 
  type: string
}

// export const Input = (props: InputProps) => { 
export const Input = ({type}: InputProps) => { 
  // console.log(props)
  console.log(type)

  return (
    <div>
      {/* <label>{props.type}</label> */}
      <label>{type}</label>
      <input />
    </div>
  )
}