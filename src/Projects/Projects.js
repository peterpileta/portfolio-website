import React from 'react'
import './Projects.css'


export default function Projects() {  
  return (
        <div className='projects-container'>
        <h1>Projects</h1>
          <div className='projects-list'>
            <a href='https://peterpileta.github.io/Weather-App/' target='blank'>
              Weather forecast
            </a>
            <a href='https://peterpileta.github.io/Ecommerce-website' target='blank'>
             E-commerce mock website
            </a>
            <a href='https://codepen.io/peterpileta/full/MWOXypd' target='blank'>
              Random quote generator
            </a>
          </div>
        </div>
)
}