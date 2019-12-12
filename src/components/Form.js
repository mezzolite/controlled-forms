import React, { Component } from 'react'


class Form extends Component {
    state = {
        name: "",
        breed: "",
        age: 0,
        image: ""
    }
    handleChange = event => {
        const newDog = this.state
        newDog[event.target.name] = event.target.value
        this.setState({ newDog })
    }

    submitHandler = event => {
        event.preventDefault()
        const { name, breed, age, image } = this.state

        this.props.addDog({ name, breed, age, image })

        this.setState({
            name: "",
            breed: "",
            age: 0,
            image: ""
        })
    }

    render() {
        const { name, breed, age, image } = this.state
        return (
            <div>
                <form className="add-dog-form"
                    onSubmit={this.submitHandler}
                >
                    <h1>Add An Adoptable Dog:</h1>
                    <input
                        name="name"
                        type="text"
                        required
                        value={name}
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <input
                        name="breed"
                        type="text"
                        required
                        value={breed}
                        placeholder="Breed"
                        onChange={this.handleChange}
                    />
                    <input
                        name="age"
                        type="number"
                        required
                        value={age}
                        placeholder="Age"
                        onChange={this.handleChange}
                    />
                    <input
                        name="image"
                        type="text"
                        required
                        value={image}
                        placeholder="Image"
                        onChange={this.handleChange}
                    />

                    <input type="submit"
                        value="Submit"
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