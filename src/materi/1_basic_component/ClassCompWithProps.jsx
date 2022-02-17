import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ClassCompWithProps extends Component {
  static propTypes = {message: PropTypes.string.isRequired}

  render() {
    return (
      <div>
          <h1>This is Prop</h1>
          <b>Here is the message: </b>
          {typeof this.props.message === "string" && <p>{this.props.message}</p>} 
      </div>
    )
  }
}
