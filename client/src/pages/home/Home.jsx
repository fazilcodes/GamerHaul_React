import React from 'react'
import './home.scss'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredproducts/FeaturedProducts'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type='Featured' />
      <Categories />
      <FeaturedProducts  type='Trending' />
      <Contact />
    </div>
  )
}

export default Home