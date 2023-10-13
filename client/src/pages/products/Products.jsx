import React, { useState } from 'react'
import List from '../../components/list/List'
import { useParams } from 'react-router-dom'
import './products.scss'

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">PC</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2">PLAYSTATION</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3">XBOX</label>
          </div>
        </div>

        <div className="filterItem">
          <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={10000} onChange={(e) => setMaxPrice(e.target.value)}/>
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
        <img className='catImg' src="https://wallpaperaccess.com/full/2044892.jpg" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products