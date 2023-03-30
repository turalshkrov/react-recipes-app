import React from 'react';
import { Link } from 'react-router-dom';
import './recipeCard.css';

export default function RecipeCard(props) {
    const { data } = props;
    const id = data._links.self.href.slice(38, 70);
    return (
        <Link to={`/recipes/${id}`} className='recipe-card'>
            <div>
                <img src={data.recipe.image} alt={data.recipe.label} />
                <p className='recipe-card-title'>{data.recipe.label}</p>
                <p className='recipe-type-label'>{data.recipe.source}</p>
            </div>
        </Link>
    )
}
