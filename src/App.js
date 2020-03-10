import React, { Component } from 'react';
import './App.css';
import ForwardScreen from './ForwardScreen'
import ReverseScreen from './ReverseScreen'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'forward',
      num: 0
    }
  }

  handleForwardSubmit = (num) => {
    this.setState({
      page: 'reverse',
      num
    })
  }

  render() {
    const { page, num } = this.state
    return (
      page === 'forward' ? <ForwardScreen handleForwardSubmit={this.handleForwardSubmit} /> : <ReverseScreen answer={num} />
    )
  }
}

export default App;
