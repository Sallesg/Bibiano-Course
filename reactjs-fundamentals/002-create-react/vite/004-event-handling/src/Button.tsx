import React from 'react'

type ButtonType = {
  showAlert: () => void
}

export const Button = (props: ButtonType) => {

  function showAlert() {
    window.alert("Click")
  }
  return (
    <>
    <button onClick={() => window.alert("click")}>Click here that the function is anonymous</button>
    <button onClick={showAlert}>Click here that the function is declarative</button>
    {/* <button onClick={showAlert()}>Click here that the function will not work because it is being invoked on the event</button> */}
    <button onClick={props.showAlert}>Click here that the function is invoked by props</button>
    </>
  )
}