import React, { Component } from 'react';
import './App.css';
import Title from './comp/Title';
import Search from './comp/Search';
import Main from './comp/Main';
import Stats from './comp/Stats';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: {
        data: {}
      },
    }
  }

  handleUserInput = (name, response) => {
    if(response) {
      this.setState({
        name: name,
        response: response,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentDidMount() {
      this.handleUserInput();
  }

  render() {
    return (
      <div className="App-container">
        <Search user={this.handleUserInput}/>
        <div className="card-container">
          <Title response={this.state.response} />
          <Main response={this.state.response} />
          <Stats response={this.state.response} />
        </div>
      </div>
    );
  }
}

export default App;