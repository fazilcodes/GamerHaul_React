import React from 'react'
import './featuredproducts.scss'
import Card from '../card/Card'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({type}) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Most {type} Products that are available at your finger tips, Enjoy gaming while you can!</p>
        </div>

        <div className="bottom">
            {error
                ? 'something went wrong'
                : loading
                ? "loading..." 
                : data.map((item) => <Card item={item} key={item.id}/>)}
        </div>
    </div>
  )
}

export default FeaturedProducts