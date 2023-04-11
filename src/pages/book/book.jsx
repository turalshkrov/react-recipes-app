import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import Navbar from '../../components/navbar/navbar';
import Error from '../../components/errorComponent/error';
import RecipeCard from '../../components/recipeCard/recipeCard';
import './book.css';
import Footer from '../../components/footer/footer';

export default function Book() {
    const [recipes, setrecipes] = useState([]);
    const [error, setError] = useState(false);
    const bookTitle = useParams().bookTitle.slice(1, useParams().bookTitle.length);
    const library = useSelector(state => state.libraryReducer.library);

    useState(() => {
        library.filter(book => book.title === bookTitle)[0].data.map(id => {
            fetch('https://api.edamam.com/api/recipes/v2/' + id + '?type=public&app_id=9a1cb042&app_key=0db6324d573590aaace93aca7be99d18')
                .then(res => res.json())
                .then(data => {
                    setrecipes(prevstate => [...prevstate, data]);
                })
                .catch(err => setError(err));
        })
    }, [])

    return (
        <div className='page'>
            <Navbar />
            <main>
                <h2 className='book-title'>{bookTitle}</h2>
                {   library.filter(book => book.title === bookTitle)[0].data.length === 0 ? 
                    <div className="empty-book">
                        <h2>
                            This book currently empty.
                        </h2>
                    </div>
                    : error ? <Error /> :
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
                }
            <Footer />
            </main>
        </div>
    )
}
