import React, { useState } from 'react'
import List from '../../components/list/List'
import { useParams } from 'react-router-dom'
import './products.scss'
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const [selectedSubCategories, setSelectedSubCategories] = useState([])

  const {data,loading,error} = useFetch(`/sub-categories?populate=*`)
  const category = useFetch(`/categories/${catId}?populate=*`)
  console.log(category);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    setSelectedSubCategories(
      isChecked 
      ? [...selectedSubCategories, value]
      : selectedSubCategories.filter((item) => item !== value)
    );
  }

  console.log(selectedSubCategories);

  return (
    <div className='products'>
      
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>

        <div className="filterItem">
          <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
        </div>

        <div className="filtrItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onChange={(e) => setSort('asc')}/>
            <label htmlFor="asc">Price (Lowest)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price' onChange={(e) => setSort('desc')}/>
            <label htmlFor="asc">Price (Highest)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img className='catImg' src={import.meta.env.VITE_REACT_APP_UPLOAD_URL +category.data?.attributes?.img?.data?.attributes?.url} alt="" />
        <List subCats={selectedSubCategories} catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products