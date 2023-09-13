import React from 'react'
import "./style.scss"
import Header from '../../components/header/Header'
import HeroBanner from './heroBanner/HeroBanner'
import Footer from '../../components/footer/Footer'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home