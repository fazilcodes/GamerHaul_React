import React from 'react'
import './List.scss'
import Card from '../card/Card'
import useFetch from '../../hooks/useFetch'

const List = ({subCats, sort, maxPrice, catId}) => {

  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item =>`&[filters][sub_categories][id]=${item}`)}
    &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  
  return (
    <div className='list'>
        {loading? 'loading...' : data?.map((item)=>
            <Card item={item} key={item.id}/>
        )}
    </div>
  )
}

export default List