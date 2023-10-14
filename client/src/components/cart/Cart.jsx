import React from 'react'
import "./cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"

const Cart = () => {
  
    const data = [
        {
            id: 1,
            img: "https://c4.wallpaperflare.com/wallpaper/844/66/451/tom-clancy-s-ghost-recon-wildlands-video-games-tom-clancy-s-ghost-recon-wallpaper-preview.jpg",
            img2: "https://c4.wallpaperflare.com/wallpaper/603/285/84/ghost-recon-video-games-tactical-special-forces-wallpaper-preview.jpg",
            title: "Ghost Recon",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, id.",
            isNew: true,
            oldPrice: 99,
            price: 69,
        },

        {
            id: 2,
            img: "https://c4.wallpaperflare.com/wallpaper/609/494/462/steve-minecraft-hd-wallpaper-preview.jpg",
            img2: "https://c4.wallpaperflare.com/wallpaper/137/602/354/video-game-minecraft-mojang-steve-minecraft-wallpaper-preview.jpg",
            title: "Minecraft",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, id.",
            isNew: false,
            oldPrice: 75,
            price: 52,
        },
    ]  

  return (
    <div className='cart'>
        <h1>Your cart items</h1>
        {data?.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0, 100)}</p>
                    <div className="price">
                        1 x ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$341</span>
        </div>
        <button>CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart