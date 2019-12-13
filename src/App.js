import React, { Component } from 'react';
import './App.css';
import AdoptableDogs from './components/AdoptableDogs'
import Form from './components/Form'


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

  addDog = (dog) => {
    this.setState({adoptableDogs: [...this.state.adoptableDogs, dog]})
    
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dog)
    })
  
  }

  render() {
    return (
      <div className="App" >
        <Form 
          addDog={this.addDog}
        />
        <AdoptableDogs
          adoptableDogs={this.state.adoptableDogs}
          
        />

      </div>
    );
  }
}


export default App;
