import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Input from './components/Input';
import * as math from 'mathjs'



class App extends Component {

  state = {
    input: "0",
    operator: false,
    decimal: false
  }

  addToInput = (val) => {
    if (this.state.input === "0") {
      this.setState({
        input: val
      })
    } else {
      this.setState({
        input: this.state.input + val
      })
    }
  }

  inputDot = () =>{
    const {input} = this.state
  if(input.indexOf('.') === -1 || input === '/^(\d*\.\d*)+[+-*/]+(\d*\.\d*)$/') {
      this.setState({
        input: input + '.'
      })
    }
  }


  handleEqual = () => {
    this.setState({
      input: math.eval(this.state.input)
    })
  }

  handleClear = () => {
    this.setState({
      input: "0"
    })
  }


  render() {

    return (
      <CalcWrapper className="calc-wrapper">
        <Input input={this.state.input} />
        <div className="row">
          <Button handleClick={this.addToInput} name="seven" >7</Button>
          <Button handleClick={this.addToInput} name="eight" >8</Button>
          <Button handleClick={this.addToInput} name="nine" >9</Button>
          <Button handleClick={this.addToInput} name="multiply" >*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput} name="four" >4</Button>
          <Button handleClick={this.addToInput} name="five" >5</Button>
          <Button handleClick={this.addToInput} name="six" >6</Button>
          <Button handleClick={this.addToInput} name="subtract" >-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput} name="one" >1</Button>
          <Button handleClick={this.addToInput} name="two" >2</Button>
          <Button handleClick={this.addToInput} name="three" >3</Button>
          <Button handleClick={this.addToInput} name="add" >+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.inputDot} name="decimal">.</Button>
          <Button handleClick={this.addToInput} name="zero">0</Button>
          <Button handleClick={() => this.handleEqual()} name="equals" >=</Button>
          <Button handleClick={this.addToInput} name="divide">/</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => this.handleClear()} name="clear" >clear</ClearButton>
        </div>
      </CalcWrapper>
    );
  }
}

const CalcWrapper = styled.div`
  display: block;
  width: 500px;
  text-align: center;
  margin: 50px auto;
  justify-content: space-between;

`


export default App;
