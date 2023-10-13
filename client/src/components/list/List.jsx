import React from 'react'
import './List.scss'
import Card from '../card/Card'

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://c4.wallpaperflare.com/wallpaper/844/66/451/tom-clancy-s-ghost-recon-wildlands-video-games-tom-clancy-s-ghost-recon-wallpaper-preview.jpg",
            img2: "https://c4.wallpaperflare.com/wallpaper/603/285/84/ghost-recon-video-games-tactical-special-forces-wallpaper-preview.jpg",
            title: "Ghost Recon",
            isNew: true,
            oldPrice: 99,
            price: 69,
        },

        {
            id: 2,
            img: "https://c4.wallpaperflare.com/wallpaper/609/494/462/steve-minecraft-hd-wallpaper-preview.jpg",
            img2: "https://c4.wallpaperflare.com/wallpaper/137/602/354/video-game-minecraft-mojang-steve-minecraft-wallpaper-preview.jpg",
            title: "Minecraft",
            isNew: false,
            oldPrice: 75,
            price: 52,
        },

        {
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN31Mp7j_F15oEvxvV0koXUYIqLbLkDxWIGg4pCzCuQ&s",
            img2: "https://w0.peakpx.com/wallpaper/325/845/HD-wallpaper-erling-haaland-ea-fc-24-gaming.jpg",
            title: "FIFA 2024",
            isNew: true,
            oldPrice: 99,
            price: 75,
        },
        {
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN31Mp7j_F15oEvxvV0koXUYIqLbLkDxWIGg4pCzCuQ&s",
            img2: "https://w0.peakpx.com/wallpaper/325/845/HD-wallpaper-erling-haaland-ea-fc-24-gaming.jpg",
            title: "FIFA 2024",
            isNew: true,
            oldPrice: 99,
            price: 75,
        },
        {
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN31Mp7j_F15oEvxvV0koXUYIqLbLkDxWIGg4pCzCuQ&s",
            img2: "https://w0.peakpx.com/wallpaper/325/845/HD-wallpaper-erling-haaland-ea-fc-24-gaming.jpg",
            title: "FIFA 2024",
            isNew: true,
            oldPrice: 99,
            price: 75,
        },
        {
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN31Mp7j_F15oEvxvV0koXUYIqLbLkDxWIGg4pCzCuQ&s",
            img2: "https://w0.peakpx.com/wallpaper/325/845/HD-wallpaper-erling-haaland-ea-fc-24-gaming.jpg",
            title: "FIFA 2024",
            isNew: true,
            oldPrice: 99,
            price: 75,
        },
    ]

  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List