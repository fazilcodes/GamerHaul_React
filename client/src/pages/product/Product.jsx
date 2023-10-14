import React, { useState } from 'react';
import "./product.scss";
import AddShopingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'

const product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_z_dbs42k6y-v0V2oyu83Q3D7Zd001SPu8L092UK3kg&s",
    "https://www.apunkagames.com/wp-content/uploads/2018/06/Call-of-Duty-Black-Ops-3-screenshot-2.jpg"
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Call Of Duty</h1>
        <span className='price'>$99</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi similique aspernatur sint quae enim, tenetur perferendis libero sunt reprehenderit culpa? Quaerat voluptatibus quae minus laudantium eveniet odio unde sapiente.</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev===1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShopingCartIcon />ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />ADD TO FAVOURITE
          </div>
          <div className="item">
            <BalanceIcon />ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: streetgamer</span>
          <span>Product-Type: PC</span>
          <span>Tag: PC, Game, Shooting</span>
        </div>
        <div className="info">
          <span>DESCRIPTION</span>
          <span>ADDITIONAL INFORMATION</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default product