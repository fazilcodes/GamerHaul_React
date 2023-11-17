import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Action</span>
          <span>Adventure</span>
          <span>Sports</span>
          <span>Consoles</span>
          <span>Gaming PC</span>
        </div>

        <div className="item">
          <h1>Link</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Contact</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            This is a test project done by Fazilcodes with both frontend and backend Technology. 
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>fazilthekkan01@gmail.com</span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">GAMERHAUL</span>
          <span className='copyright'>&copy; Copyright 2023, All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" className='paymentimg' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer