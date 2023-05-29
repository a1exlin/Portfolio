import React from 'react'
import './header.css'
import CTA from './CTA'
import Selfie from '../../assets/Self photo 2.jpg'
 import Socials from './Socials'
const Header = () => {
    return (
        <header>
            
            <div className='container header__container'>
                <h5> Hello, I am </h5>
                <h1> Alexander Lin</h1>
                <h5 className='text-light'> Fullstack Developer </h5>
                <CTA />
                <Socials/>
                <div className='selfie'>
                    <img src={Selfie} alt="selfie" />

                </div>

                <a href="#contact" className='scroll_down'> Scroll Down</a>
            </div>


        </header>
    )
}


export default Header