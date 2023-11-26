import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.jpg'




const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>EXCLUSIVE COMPONENTS</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt='x' style={{ width: '75px', height: '75px' }} />

                </div>
                <p>components</p>
                <p>for everyone</p>
            </div>
            <div className="hero-lastest-btn">

            <div class="hero-btn-text">Latest Collection</div>
            <img src={arrow_icon} alt="" />
            </div>

        </div>

        <div className="hero-right">
        <img src={hero_image} alt=""  style={{ width: '600px', height: '600px' }}/>
        </div>
    </div>
  )
}

export default Hero