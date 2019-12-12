import React, { Component } from 'react';
import './App.css';
import AdoptableDogs from './components/AdoptableDogs'
const BASE_URL = `https://dogs-backend.herokuapp.com/dogs`
class App extends Component {
  state = {
    adoptableDogs: []
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(adoptableDogs => this.setState({ adoptableDogs }))
  }

  render() {
    return (
      <div className="App" >
        <AdoptableDogs
          adoptableDogs={this.state.adoptableDogs}
        />

      </div>
    );
  }
}


export default App;
