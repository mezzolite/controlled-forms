import React, { Component } from 'react'

class Form extends Component {

    state = {
        name: '',
        breed: '',
        age: 0,
        image: ''

    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.addDog(this.state)

        this.setState({
            name: '',
            breed: '',
            age: 0,
            image: '' 
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input 
                        onChange={this.handleChange}
                        name="name"
                        type="text"
                        value={this.state.name}
                        placeholder="Dog Name"
                        required
                    />
                    <input 
                        onChange={this.handleChange}
                        name="breed"
                        type="text"
                        value={this.state.breed}
                        placeholder="Dog Breed"
                        required
                    />
                    <input
                        onChange={this.handleChange} 
                        name="age"
                        type="number"
                        value={this.state.age}
                        placeholder="Dog Age"
                        required
                    />
                    <input
                        onChange={this.handleChange} 
                        name="image"
                        type="text"
                        value={this.state.image}
                        placeholder="Dog Image URL"
                        required
                    />
                    <input 
                        type="submit" 
                    />
                </form>
                <h1>Form Output</h1>
                <p>Name: {this.state.name}</p>
                <p>Breed: {this.state.breed}</p>
                <p>Age: {this.state.age}</p>
                <img src={this.state.image} alt={this.state.name} />
            </div>
        )
    }
}

export default Form