import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Rings } from 'react-loader-spinner';
import Card from '../Components/Card'
import Search from '../Components/Search'

const Films = () => {
  const [films, setFilms] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    axios.get(`https://www.omdbapi.com/?apikey=ddb04453&s=avengers&type=movie`, {cancelToken: source.token})
    .then(res => {
      setFilms(res.data.Search)
      setIsLoading(false)
    }).catch(err => console.log(err.message));
    return () => {
      source.cancel();
    };
  }, [])

  useEffect(() => {
    inputVal !== '' && axios.get(`https://www.omdbapi.com/?apikey=ddb04453&s=${inputVal}&type=movie`) 
    .then(res => {
      setFilms(res.data.Search);
      setIsLoading(false)
    }).catch(err => console.log(err.message));
  }, [inputVal])

  const handleLoading = (value) => {
    setIsLoading(value);
    setFilms([]);
  }

  return (
      <div>
        <Search handleSearch={(value) => setInputVal(value)} isLoading={handleLoading}/>
        {isLoading === true && (
            <div className='flex justify-center'>
              <Rings color="#0092ff" height={200} width={200} />
            </div>
        )}
        <div className="mt-10 grid grid-cols-3 px-16">
            {
              films.map((film, i) => {
                return <Card key={i} title={film.Title} poster={film.Poster} year={film.Year}  />
              })
            }
        </div>
      </div>
  )
}

export default Films