import React from 'react'
import './home.scss'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredproducts/FeaturedProducts'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type='Featured' />
      <FeaturedProducts  type='Trending' />
    </div>
  )
}

export default Home