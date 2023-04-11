import React from 'react';
import Navbar from '../../components/navbar/navbar';
import burger from '../../assets/burger.png'
import './errorPage.css';

export default function ErrorPage() {
  return (
    <div className='page'>
        <Navbar />
        <main>
            <div className="error-page-content">
                <h2>Oops!</h2>
                <p>Sorry, the page you were looking for doesn't exist.</p>
            <div className="error-code">
                <span>4</span>
                <img src={burger} className="error-page-img"/>
                <span>4</span>
            </div>
            </div>
        </main>
    </div>
  )
}
