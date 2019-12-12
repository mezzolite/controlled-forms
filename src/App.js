import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
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

  addDog = dog => {
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dog),
    }).then(response => response.json())
      .then(dog => {
        this.setState({
          adoptableDogs: [...this.state.adoptableDogs, dog]
        })
      })
  }

  render() {
    return (
      <div className="App" >
        <AdoptableDogs
          adoptableDogs={this.state.adoptableDogs}
        />
        <Form addDog={this.addDog} />
      </div>
    );
  }
}


export default App;
