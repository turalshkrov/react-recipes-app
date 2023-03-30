import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import './recipe.css';

export default function Recipe() {
  const [ data, setData ] = useState();
  const params = useParams();

  useEffect(() => {
    fetch('https://api.edamam.com/api/recipes/v2/'+ params.id +'?type=public&app_id=9a1cb042&app_key=0db6324d573590aaace93aca7be99d18')
    .then(res => res.json())
    .then(data => {
      setData(data.recipe);
      console.log(data.recipe);
    });
  }, [])
  
  return (
    <div className='page'>
      <Navbar />
      <main>
        {
          data && 
          <>
          <div className='recipe-page-container'>
            <div className="recipe-main-info">
              <h1 className='recipe-page-title'>
                {data.label}
              </h1>
              <p className="recipe-source">
                {data.source}
              </p>
              <div className="recipe-summary">
                <div className="recipe-summary-item">
                  <h3>
                    {data.ingredientLines.length}
                  </h3>
                  <p>
                    Ingredients
                  </p>
                </div>
                <div className="recipe-summary-item recipe-summary-item-middle">
                  <h3>
                    {Math.floor(data.calories)}
                  </h3>
                  <p>
                    Calories
                  </p>
                </div>
                <div className="recipe-summary-item">
                  <h3>
                    {Math.floor(data.totalWeight)}
                  </h3>
                  <p>
                    Total Weight
                  </p>
                </div>
              </div>
              <div className="recipe-actions">
                <button className="btn add-to-library">
                  <FontAwesomeIcon icon={faPlus}/>
                  <span>Add To Library</span>
                </button>
                <button className='btn add-to-favorite'>
                  <FontAwesomeIcon icon={faHeart}/>
                  <span>Add To Favorites</span>
                </button>
                <button className="btn share" onClick={() => {navigator.clipboard.writeText(location.href)}}>
                  <FontAwesomeIcon icon={faShare}/>
                  <span>Share</span>
                </button>
              </div>
            </div>
            <img 
              className='recipe-page-img'
              src={data.image} 
              alt={data.label}/>
          </div>
          <hr />
          <div className="recipe-info">
            <div className="ingredients-wrapper">
              <h2>Ingredients</h2>
              <ul className="ingredients-ul">
                {
                  data.ingredientLines.map(ingredient => {
                    return(
                      <li key={ingredient}>
                        {ingredient}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <h2>Nutrients</h2>
            <div className="nutrients-wrapper">
              <div className="nutrient-item">
                <span className="nutrient-quantity">{Math.floor(data.totalNutrients.ENERC_KCAL.quantity)}</span>
                <span className="nutrient-label">{data.totalNutrients.ENERC_KCAL.label}</span>
              </div>
              <div className="nutrient-item">
                <span className="nutrient-quantity">{Math.floor(data.totalNutrients.FAT.quantity)} {data.totalNutrients.FAT.unit}</span>
                <span className="nutrient-label">{data.totalNutrients.FAT.label}</span>
              </div>
              <div className="nutrient-item">
                <span className="nutrient-quantity">{Math.floor(data.totalNutrients.CHOCDF.quantity)} {data.totalNutrients.CHOCDF.unit}</span>
                <span className="nutrient-label">{data.totalNutrients.CHOCDF.label}</span>
              </div>
              <div className="nutrient-item">
                <span className="nutrient-quantity">{Math.floor(data.totalNutrients.PROCNT.quantity)} {data.totalNutrients.PROCNT.unit}</span>
                <span className="nutrient-label">{data.totalNutrients.PROCNT.label}</span>
              </div>
              <div className="nutrient-item">
                <span className="nutrient-quantity">{Math.floor(data.totalNutrients.SUGAR.quantity)} {data.totalNutrients.SUGAR.unit}</span>
                <span className="nutrient-label">{data.totalNutrients.SUGAR.label}</span>
              </div>
            </div>
          </div>
          </>
        }
      <Footer />
      </main>
    </div>
  )
}
