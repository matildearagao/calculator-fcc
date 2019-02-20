import React from 'react'

export default function ClearButton(props) {
  return (
     <div className="clear-btn" onClick={props.handleClear} id={props.name}>
    {props.children}
  </div>
  )
}
