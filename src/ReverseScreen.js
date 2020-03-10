import React, { Component } from 'react';
import './App.css';

const checkGuess = (guess, answer) => {
  if (reverseNumber(guess) === parseFloat(answer)) { return true }
  else { return false }
}

const reverseNumber = (num) => {
  return parseFloat(
    num
      .toString()
      .split('')
      .reverse()
      .join(''))
    * Math.sign(num)
}



class ReverseScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guess: 0,
      guessText: "?",
      textColor: '#eeeeee'
    }
  }

  handleGuess = (e) => {
    const { answer } = this.props
    const guess = e.target.value

    if (guess.length === answer.length) {
      if (checkGuess(guess, answer)) {
        this.setState({ guessText: "True", color: "green" })
      } else {
        this.setState({ guessText: "False", color: "#d72323" })
      }
    } else {
      this.setState({ guessText: "?", color: "#eeeeee" })
    }
  }

  render() {
    const { guessText, color } = this.state
    return (
      <div className="app">
        <h1>Now Write it Backwards!</h1>
        <div className="flow-box">
          <input type='number' onChange={this.handleGuess} autoFocus="true" />
          <p style={{color}}>{guessText}</p>
        </div>
      </div>
    )
  }
}

export default ReverseScreen;