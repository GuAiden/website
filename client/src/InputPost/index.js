import React, {Component} from 'react'

class InputForm extends Component {

    initialState = {
        description: 'Post something!'
    }

    state = this.initialState

    handleSubmit = async () => {
        try {
            console.log(this.state)
            const requestOptions = {
                method: 'POST', 
                headers: {'Content-Type' : 'application/json'}, 
                body: JSON.stringify(this.state)
            }

            const response = await fetch("http://localhost:5000/posts", requestOptions)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(response)
            this.setState(this.initialState)
        } catch (err) {
            console.error(err); 
        }
    }

    handleChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    submitPost = () => {

    }

    render() {
        return (
            <form>
                <label htmlFor="Post">Description</label>
                <input 
                    type="text"
                    name="description"
                    id="description"
                    value={this.state.description}
                    onChange={this.handleChange} />
                <input
                    type="button"
                    value="Post"
                    onClick={this.handleSubmit} />
            </form>
        )
    }
}

export default InputForm