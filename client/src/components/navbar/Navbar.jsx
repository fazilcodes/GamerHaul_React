import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './navbar.scss'
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [openCart, setOpenCart] = useState(false)
  const [showmenu, setShowMenu] = useState(false)
  const products = useSelector(state => state.cart.products)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/flag.png" className='flag' alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item cats">
            <Link className='link' to="/products/4">Action</Link>
          </div>
          <div className="item cats">
            <Link className='link' to="/products/5">Adventure</Link>
          </div>
          <div className="item cats">
            <Link className='link' to="/products/3">Sports</Link>
          </div>
        </div>

        <div className="center">
          <Link className='link' to="/">GAMERHAUL</Link>
        </div>

        <div className={`${showmenu? 'right active': 'right' }`}>
          <div className="item">
            <Link className='link' to="/">Home</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Store</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteIcon />
            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
        <div className={`${showmenu? 'show_menu animate-toggle' : 'show_menu'}`} onClick={() => setShowMenu(!showmenu)}>
          <span></span>
          <span></span>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  )
}

export default Navbar