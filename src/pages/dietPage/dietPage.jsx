import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Error from '../../components/errorComponent/error';
import RecipeCard from '../../components/recipeCard/recipeCard';
import Footer from '../../components/footer/footer';

export default function DietPage() {
  const [recipes, setrecipes] = useState([]);
  const [error, setError] = useState(false);
  const diet = useParams().diet;
  const [ nextDataUrl, setNextDataUrl ] = useState();

  useState(() => {
    fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=9a1cb042&app_key=0db6324d573590aaace93aca7be99d18&diet=' + diet)
    .then(res => res.json())
    .then(data => {
      setrecipes(data.hits);
      setNextDataUrl(data['_links'].next.href);
    })
    .catch(err => setError(err));
  }, [])

  const showMore = () => {
    fetch(nextDataUrl)
    .then(res => res.json())
    .then(data => {
      setrecipes(recipes => [...recipes,...data.hits]);
      setNextDataUrl(data['_links'].next.href);
    });
  }

  return (
      <div className='page'>
          <Navbar />
          <main>
            <h2 className='page-title'>
              Diet: {diet}
            </h2>
            { 
              error ? <Error /> :
              <>
                <section className='result-container'>
                    {
                      recipes && recipes.map(data => {
                        return (
                            <RecipeCard
                              data={data}
                              key={data.recipe.uri}
                            />
                          )
                        })
                    }
                </section>
                {
                  nextDataUrl && 
                  <div className='button-container'>
                    <button 
                      className='show-more'
                      onClick={showMore}>
                      Show More
                    </button>
                  </div>
                }
              </>
            }
            <Footer />
          </main>
      </div>
  )
}
