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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda est deleniti dolorum, ipsa consequuntur nemo aliquid architecto. Doloribus facere quos quasi dolore! Consequatur saepe non, distinctio doloribus provident amet error deserunt ullam culpa aspernatur porro accusamus, eveniet sunt, fuga dolorum quis? Libero eos odio recusandae.</p>
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