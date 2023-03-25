import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import diets from '../../data/diet.json';
import dishTypes from '../../data/dishType.json';
import './search.css';
import RecipeCard from '../../components/recipeCard/recipeCard';

export default function Search() {
  const [ searchKey, setSearchKey ] = useState('');
  const [ searchResult, setSearchResult ] = useState([]);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  }

  const fetchData = () => {
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q='+ searchKey +'&app_id=9a1cb042&app_key=0db6324d573590aaace93aca7be99d18')
    .then(res => res.json())
    .then(data => {
      setSearchResult(data.hits);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }

  const handleSearchKeyClear = () => {
    setSearchKey('');
    setSearchResult([]);
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
        { searchResult.length > 0 
          ? <section id="search-result">
              {
                searchResult && searchResult.map(data => {
                  return(
                    <RecipeCard 
                    data={data.recipe}
                    key={data.recipe.uri}/>
                  )
                })
              }
            </section>
          : <section id='recomend-section'>
          <h2 className="search-section-title">
            Diets for you
          </h2>
          <div className="recomend-container">
            {
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
          <h2 className="search-section-title">
            Browse
          </h2>
          <div className="recomend-container">
            {
              dishTypes.map(type => {
                return(
                  <Link 
                    to={`/dishTypes/${type.title}`}
                    key={type.id}>
                    <div className="recomend-card" >
                      <img 
                      src={type.cover}
                      alt={type.title}
                      />
                      <p className="recomend-title">
                        {type.title}
                      </p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </section> }
        
        <Footer />
      </main>
    </div>
  )
}
