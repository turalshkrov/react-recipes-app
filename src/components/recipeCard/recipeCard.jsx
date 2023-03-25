import React from 'react';
import { Link } from 'react-router-dom';
import './recipeCard.css';

export default function RecipeCard(props) {
    const { data } = props
    console.log(data);
    return (
        <Link to={`/${data.uri}`}>
            <div className='recipe-card'>
                <img src={data.image} alt={data.label} />
                <p className='recipe-card-title'>{data.label}</p>
            </div>
        </Link>
    )
}
