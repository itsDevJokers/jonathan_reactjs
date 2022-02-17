import React, { Component } from 'react'

export default class ClassCompWithState extends Component {
    state = {
        text: "",
    };

    handleChange = (e) => {
        this.setState({text: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>This is State</h1>
                <input onChange={this.handleChange} type="text" placeholder='Write anything here...' />
                <p>Your text: {this.state.text}</p>
            </div>
        )
    }
}
