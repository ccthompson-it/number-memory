import React, { Component } from 'react';
import './App.css';


class ForwardScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'forward',
      num: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      num: e.target.value
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Enter any Number</h1>
        <div className="flow-box">
          <input type="number" onChange={this.handleChange} autoFocus="true" />
          <button value='enter' onClick={() => this.props.handleForwardSubmit(this.state.num)}>Enter</button>
        </div>
      </div>
    )
  }
}

export default ForwardScreen;