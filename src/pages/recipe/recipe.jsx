import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar'

export default function Recipe() {
  const [ data, setData ] = useState();
  const params = useParams();
  useEffect(() => {
    fetch('https://api.edamam.com/api/recipes/v2/'+ params.id +'?type=public&app_id=9a1cb042&app_key=0db6324d573590aaace93aca7be99d18')
    .then(res => res.json())
    .then(data => setData(data.recipe));
  }, [])
  return (
    <div className='page'>
      <Navbar />
      <main>
        {
          data && 
          <div>
            <p>Recipe: {data.label}</p>
            <img src={data.image} alt={data.label}/>
          </div>
        }
      </main>
    </div>
  )
}
