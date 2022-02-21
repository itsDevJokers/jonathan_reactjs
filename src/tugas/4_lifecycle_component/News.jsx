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
    isLoading: true
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
    this.state.inputVal = value;
    axios.get(`https://newsapi.org/v2/everything?q=${this.state.inputVal}&sortBy=popularity&language=id&apiKey=9d773bd0c3cc4e669a70b9afa886b206`)
      .then(res => {
        this.setState({articles: res.data.articles})
        this.setState({isLoading: false})
      }).catch(err => console.log(err.message))
  }

  handleLoading = (value) => {
    this.setState({isLoading: value})
    this.setState({articles: []})
  }

  render() {
    return (
      <div>
          <Title />
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