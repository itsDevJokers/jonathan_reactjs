import React, { Component } from 'react'

export class Search extends Component {
  state = {
    value: '',
  }
  handleSearchValue = (e) => {
    e.preventDefault();
    const {value} = this.state;
    this.setState({}, () => this.props.receivedValue(value))
    this.setState({}, () => this.props.isLoading(true))
  }

  render() {
    return (
        <form className="my-16 mx-auto px-24">
            <div className="flex items-center border-b border-teal-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="search" type="text" placeholder="Search News..." onChange={(e) => this.setState({value: e.target.value})}/>
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" onClick={this.handleSearchValue}>
                Search
            </button>
            </div>
        </form>
    )
  }
}

export default Search