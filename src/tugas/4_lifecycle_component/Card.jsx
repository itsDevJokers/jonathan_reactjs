import React, { Component } from 'react'

export class Card extends Component {
dateConvert = (date) => {
    let inputDate = new Date(date);
    return inputDate.toLocaleString();
}
  render() {
    return (
        <div className="mx-10 mb-6 max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={this.props.urlToImage} alt={this.props.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl">{this.props.title}</div>
                <p className="text-gray-400 mb-2">{this.props.author} - {this.dateConvert(this.props.publishedAt)}</p>
                <p className="text-gray-800 text-base">
                    {this.props.description}
                </p>
            </div>
            <button className="mx-6 mb-4 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white text-sm font-bold py-2 px-4 border rounded" onClick={() => {
                window.open(`${this.props.url}`)
            }}>Read more...</button>
        </div>
    )
  }
}

export default Card