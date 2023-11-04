import React from 'react'
import './List.scss'
import Card from '../card/Card'
import useFetch from '../../hooks/useFetch'

const List = ({subCategories, sort, maxPrice, catId}) => {

  const {data,loading,error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${subCategories.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`)}`)

  return (
    <div className='list'>
        {loading? 'loading...' : data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List