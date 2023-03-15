import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import diets from '../../data/diet.json'
import './search.css'

export default function Search() {
  const [ searchKey, setSearchKey ] = useState('');
  const [ searchResult, setSearchResult ] = useState();

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  }

  const fetchData = () => {
    if (searchKey.length >= 3) {
      fetch('https://api.edamam.com/api/recipes/v2?type=public&q='+ searchKey +'&app_id=9a1cb042&app_key=0db6324d573590aaace93aca7be99d18')
      .then(res => res.json())
      .then(data => setSearchResult(data.hits));
      console.log(searchResult);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }

  const handleSearchKeyClear = () => {
    setSearchKey('');
  }

  return (
    <div className='page'>
      <Navbar />
      <main>
        <section id='search-bar'>
          <form
            id="search-form"
            onSubmit={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <input 
              type="text"
              id="search-input"
              value={searchKey}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              id='search-clear'
              icon={faXmark}
              onClick={handleSearchKeyClear}
              />
          </form>
        </section>
        <section id='recomend-section'>
          <h2 className="search-section-title">
            Diets for you
          </h2>
          <div className="recomend-container">
            {
              searchResult ?? 
              diets.map(diet => {
                return(
                  <Link 
                    to={`/diets/${diet.title}`}
                    key={diet.id}>
                    <div className="recomend-card" >
                      <img 
                      src={diet.cover}
                      alt={diet.title}
                      />
                      <p className="recomend-title">
                        {diet.title}
                      </p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </section>
        <section id="search-result">
          {
            searchResult && searchResult.map(data => {
              return(
                <Link
                  to={`/recipes/${data._links.self.href}`}
                  key={data.recipe.uri}>
                    <p>{data.recipe.label}</p>
                </Link>
              )
            })
          }
        </section>
        <Footer />
      </main>
    </div>
  )
}
