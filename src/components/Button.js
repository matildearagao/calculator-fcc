import React from 'react'
import styled from 'styled-components'

const isOperator = val => {
    if(val==='.' || val === '=' || isNaN(val) ){
        return true
    } 
}

const Button = (props) =>
    <ButtonWrapper 
        className={`${isOperator(props.children) ? 'operator' : null}`}
        onClick={() => props.handleClick(props.children)}
        id={props.name}
>
        {props.children}
    </ButtonWrapper>




const ButtonWrapper = styled.div`
   
   .operator{
        background: orange !important;
        color: 'white'
    }

    background-color: gainsboro;
    border: 1px solid white;
    display: inline-block;
    min-width: 50px;
    padding: 20px;

`

   




export default Button