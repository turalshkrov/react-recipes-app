import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import types from'../../data/mealTypes.json';
import './home.css';

export default function Home() {

  return (
    <div className='page'>
        <Navbar />
        <main>
            <h1 className="home-page-title">Browse new tastes</h1>
        <section id="meal-types">
          {
            types.map(type => {
              return(
                <div key={type.id} className="type-card">
                  <img src={type.cover} alt={type.title} />
                  <p>{type.title}</p>
                </div>
              )
            })
          }
        </section>
        </main>
    </div>
  )
}
