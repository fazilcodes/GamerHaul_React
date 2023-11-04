import React from 'react'
import './categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://wallpaperaccess.com/full/2044892.jpg" alt="" />
                <button><Link className='link' to={'products/1'}>All</Link></button>
            </div>
            <div className="row">
                <img src="https://wallpaperaccess.com/full/2092955.jpg" alt="" />
                <button><Link className='link' to={'products/2'}>Adventure</Link></button>
            </div>
        </div>

        <div className="col">
            <div className="row">
                <img src="https://wallpaperaccess.com/full/749271.jpg" alt="" />
                <button><Link className='link' to={'/products/3'}>Shooting</Link></button>
            </div>
        </div>

        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://wallpaperaccess.com/thumb/10275738.jpg" alt="" />
                        <button><Link className='link' to={'/products/5'}>Sports</Link></button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://wallpaperaccess.com/full/13644.jpg" alt="" />
                        <button><Link className='link' to={"/products/6"}>Racing</Link></button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://wallpaperaccess.com/full/9143.png" alt="" />
                <button><Link className='link' to={"/products/7"}>Action</Link></button>
            </div>
        </div>
    </div>
  )
}


export default Categories