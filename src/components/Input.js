import React from 'react'
import styled from 'styled-components'

export default function Input(props) {
  return (
    <DisplayWrapper>
      <div id="display">
        {props.input}
      </div>
    </DisplayWrapper>
  )
}

const DisplayWrapper = styled.div`
  background-color: white;
  color: black;
  #display{
  padding: 3rem 0;
    background: black;
    color: white;
    font-size: 2rem;
    width: 500px;
  }
  `