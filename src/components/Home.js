import React from 'react'
import img from '../images/first.jpg'
import Navigation from './Navigation';

const Home = ()=>(<div>
    <Navigation/>
    <h1>시간이란...</h1>
    <p>내일 죽을 것처럼 오늘을 살고
        영원히 살 것처럼 내일을 꿈꾸어라.</p>
    <img src={img}/>
  
    </div>
);
export default Home