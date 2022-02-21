import React, { Component } from 'react'
import axios from 'axios';
import { Rings } from 'react-loader-spinner';

import Card from './Card'
import Search from './Search'
import Title from './Title'

export class News extends Component {
  state = {
    articles: [],
    inputVal: '',
    isLoading: true,
    isError: false,
    errMessage: '',
  }

  componentDidMount(){
      axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=9d773bd0c3cc4e669a70b9afa886b206`)
        .then(res => {
            const data = res.data;
            this.setState({ articles: data.articles })
            this.setState({isLoading: false})
        })
        .catch(err => {
          console.log(err.message)
        })
  }

  handleReceivedValue = (value) => {
    value !== '' && axios.get(`https://newsapi.org/v2/everything?q=${value}&sortBy=popularity&language=id&apiKey=9d773bd0c3cc4e669a70b9afa886b206`)
      .then(res => {
        this.setState({articles: res.data.articles})
        this.setState({isLoading: false})
        this.setState({isError: false})
      })
      if (value === ''){
        this.setState({isError: true})
        this.setState({isLoading: false})
      }
  }

  handleLoading = (value) => {
    this.setState({isLoading: value})
    this.setState({articles: []})
  }

  render() {
    return (
      <div>
          <Title />
          {this.state.isError === true && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">Request Not Found!!!</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
          </div>
          )}
          <Search receivedValue={this.handleReceivedValue} isLoading={this.handleLoading}/>
          {this.state.isLoading === true && (
            <div className='flex justify-center'>
              <Rings color="#0f766e" height={200} width={200} />
            </div>
          )}
          
          <div className="grid grid-cols-3 px-16">
              {this.state.inputVal === '' && this.state.articles.map((article, i) => {
                return <Card key={i} title={article.title} urlToImage={article.urlToImage} author={article.author} publishedAt={article.publishedAt} description={article.description} url={article.url} />
              })}
              {this.state.articles.filter(() => this.state.inputVal !== '').map((article, i) => {
                return <Card key={i} title={article.title} urlToImage={article.urlToImage} author={article.author} publishedAt={article.publishedAt} description={article.description} url={article.url} />
              })}
          </div>
      </div>
    )
  }
}

export default News