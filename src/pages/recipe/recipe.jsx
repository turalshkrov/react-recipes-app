import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar'

export default function Recipe() {
  const params = useParams();

  return (
    <div className='page'>
      <Navbar />
      <main>
        <p>Recipe: {params.id}</p>
      </main>
    </div>
  )
}
