import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { variable1: 0, variable2: 0 }
  }

  render() {
    return (
      <div class="App">
        <label for="variable1">Value 1: </label>
        <input onChange={this.handleChange1} type="number" class="col-lg3"></input>
        <label for="variable2"> Value 2: </label>
        <input onChange={this.handleChange2} type="number" class="col-lg3"></input>
        <h1>Sum: {Number(this.state.variable1) + Number(this.state.variable2)}</h1>
      </div>
    );
  }

  handleChange1 = (evt) => {
    this.setState({
      variable1: evt.target.value
    })
  }

  handleChange2 = (evt) => {
    this.setState({
      variable2: evt.target.value
    });
  }

}

export default App;
