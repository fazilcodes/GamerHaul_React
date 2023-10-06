import React, { useState } from 'react'
import './slider.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)  

  const data = [
    "https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2019/02/01/f6e197ea/gow.jpg",
    "https://c4.wallpaperflare.com/wallpaper/420/233/125/rise-of-the-tomb-raider-secrets-of-immortality-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/433/793/245/5bd049d0102c3-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/282/859/637/video-game-fortnite-fortnite-battle-royale-wallpaper-preview.jpg"
  ]
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1)
  }

  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
        </div>

        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <ArrowBackIosNewIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <ArrowForwardIosIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider