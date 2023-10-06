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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis qui quidem doloribus vitae facere ducimus maxime culpa perferendis illum eos ullam quas omnis sint, voluptatem molestiae! Recusandae cum autem voluptate!
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse perferendis, quos itaque iste fuga nisi doloremque quod fugiat, id deleniti voluptas, nesciunt maiores placeat consectetur vel necessitatibus repellendus consequuntur cupiditate.</span>
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