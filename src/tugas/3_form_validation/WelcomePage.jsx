import React, { Component } from 'react'
import Form from './Form'

class Navbar extends Component {
  state = {
    isOpen: false
  }
  handleClick = () => {
    this.setState({isOpen: !this.state.isOpen}, () => this.props.receivedValue(this.state.isOpen))
  }
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-">
        <img className='w-6 mr-2' src="https://img.icons8.com/office/16/000000/home--v1.png"/>
          <span className="font-semibold text-xl tracking-tight">HomePage</span>
        </div>
        <div className="block">
        <div>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" onClick={this.handleClick}>Register</button>
          </div>
        </div>
      </nav>
    )
  }
}


export default class WelcomePage extends Component {
    state = {
        isOpen: false
    }
    handleClick = (value) => {
        this.setState({isOpen: value})
        console.log(this.state.isOpen);
    }
  render() {
    return (
      <div>
          <Navbar receivedValue={this.handleClick}/>
          {this.state.isOpen && (
              <div className='flex justify-center mt-20'>
                <Form />
              </div>
          )}
      </div>
    )
  }
}
