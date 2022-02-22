import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Search from './Search'
import Title from './Title'

import { Rings } from 'react-loader-spinner';

function News() {
    const [articles, setArticles] = useState([]);
    const [inputVal, setInputVal] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const cancelToken = axios.CancelToken;
      const source = cancelToken.source();
      axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=281c2b7f724846c48d97e8d9621bf2f5`, {cancelToken: source.token})
      .then(res => {
        setArticles(res.data.articles)
        setIsLoading(false)
      }).catch(err => console.log(err.message));
      return () => {
        source.cancel();
      };
    }, [])

    useEffect(() => {
      inputVal !== '' && axios.get(`https://newsapi.org/v2/everything?q=${inputVal}&sortBy=popularity&language=id&apiKey=281c2b7f724846c48d97e8d9621bf2f5`) 
      .then(res => {
        setArticles(res.data.articles);
        setIsLoading(false)
      }).catch(err => console.log(err.message));
    }, [inputVal])

    const handleLoading = (value) => {
      setIsLoading(value);
      setArticles([]);
    }

  return (
    <div>
        <Title />
        <Search handleSearch={(value) => setInputVal(value)} isLoading={handleLoading}/>
        {isLoading === true && (
            <div className='flex justify-center'>
              <Rings color="#0f766e" height={200} width={200} />
            </div>
        )}
        <div className="grid grid-cols-3 px-16">
          {inputVal === '' && articles.map((article, i) => {
              return (
                <Card key={i} title={article.title} urlToImage={article.urlToImage} author={article.author} publishedAt={article.publishedAt} description={article.description} url={article.url} />
              )
          })}
          {articles.filter(() => inputVal !== '').map((article, i) => {
            return (
              <Card key={i} title={article.title} urlToImage={article.urlToImage} author={article.author} publishedAt={article.publishedAt} description={article.description} url={article.url} />
            )
          })}
        </div>
    </div>
  )
}

export default News