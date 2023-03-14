import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import mealTypes from'../../data/mealTypes.json';
import cuisines from '../../data/cuisineType.json';
import './home.css';
import Footer from '../../components/footer/footer';

export default function Home() {

  return (
    <div className='page'>
        <Navbar />
        <main>
        <section id="cuisine-type">
          <h2 className='section-title'>Browse the different cuisines of the world</h2>
          <div className='container'>
          {
            cuisines.map(cuisine => {
              return(
                <div key={cuisine.id} className="cuisine-card" >
                  <Link to={`/cuisine/${cuisine.title}`}>
                    <img src={cuisine.cover} alt={cuisine.title}/>
                    <p className='cuisine-title'>{cuisine.title}</p>
                  </Link>
                </div>
              )
            })
          }
          </div>
        </section>
        <section id="meal-types">
          <h2 className="section-title">
            What are you looking for?
          </h2>
          <div className="container">
          {
            mealTypes.map(type => {
              return(
                <div key={type.id} className="type-card">
                  <img src={type.cover} alt={type.title} />
                  <Link to={`/meals/${type.title}`} className='type-title'>{type.title}</Link>
                </div>
              )
            })
          }
          </div>
        </section>
        <Footer />
        </main>
    </div>
  )
}
