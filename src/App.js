import React from 'react'
import Profile from './Profile/Profile'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import './App.css'
import { useState } from 'react'
import ItemsCarousel from 'react-items-carousel';

export default function App() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    
    return(
      <div>
        <div className="background-img"></div>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={  <div className="arrow left"></div>}
        rightChevron={  <div className="arrow right"></div>}
        chevronWidth={chevronWidth}
      >
        <Profile />
        <Projects />
        <Contact />
      </ItemsCarousel>
        </div>
    )
}