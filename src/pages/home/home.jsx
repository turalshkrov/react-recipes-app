import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import './home.css';

export default function Home() {
  const apiUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  const apiParams = 'app_id=9a1cb042&app_key=0db6324d573590aaace93aca7be99d18';

  const [ cakeRecipes, setCakeRecipes ] = useState();
  const [ cocktailRecipes, setCocktailRecipes ] = useState();

  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=cocktail&app_id=9a1cb042&app_key=0db6324d573590aaace93aca7be99d18`)
    .then(res => res.json())
    .then(data => setCakeRecipes(data.hits))
  }, [])

  return (
    <div className='page'>
        <Navbar />
        <main>
            <h1 className="home-page-title">Browse new tastes</h1>
        
        </main>
    </div>
  )
}
