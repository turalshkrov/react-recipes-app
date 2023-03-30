import React from 'react';
import { RotateLoader } from 'react-spinners';
import './preloader.css';

export default function Preloader() {
  return (
    <div className='preloader-container'>
        <RotateLoader color="#3a9691" />
    </div>
  )
}
