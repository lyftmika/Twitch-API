import React, { Component } from 'react';
import './App.css';
import Title from './comp/Title';
import Search from './comp/Search';
import Main from './comp/Main';
import Stats from './comp/Stats';
import Follows from './comp/Follows';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: {
        data: {},
      },
      follows: {
        data:{
          follows:[],
        },
      },
    }
  }

  handleUserInput = (name, response, follows) => {
    if(response && follows) {
      this.setState({
        name: name,
        response: response,
      });
    }

    if(follows) {
      this.setState({
        follows: follows,
      });
    }
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
        <Follows follows={this.state.follows} />
      </div>
    );
  }
}

export default App;