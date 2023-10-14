import './App.css';
import React, { Component } from 'react';
import './style.css';
import ResultComponent from './components/result.js';
import KeyPadComponent from './components/keys.js';

class App extends Component {
  state = {
    result: ""
  }

  onClick = button => {
    if(button === "=") {
      this.calculate();
    }

    else if(button === "C") {
      this.reset();
    }

    else if(button === "CE") {
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch(e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <div className="calculator-body">
            <ResultComponent result={this.state.result} />
            <KeyPadComponent onClick={this.onClick} />
          </div>
        </div>
      </header>
      </div>
    )
  }
}

export default App;