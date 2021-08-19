import React from 'react'
import './intro.css'
import AnimationShape from '../Animation/AnimationShape'

import toon from '../../img/cart.jpeg'

const Intro = () => {
    return (
        <div className='container' >
            
           
            <div className='left' >
            <AnimationShape/> 
                <h1 className='title' >I have made a Creative Page</h1>
                <p  className='desc'>
                    Just for the practice purpose i have made this WebSite ,
                    I have made it with React, Styled-Components , CSS and some Animation

                </p>
                <div className='info' >
                    <button className='button' >
                        START A PROJECT
                    </button>

                    <div className='contact' >
                        <div className='phone' >
                                Call @ 9876543210
                        </div>

                        <div className='contactText' >
                                    for any enquiry or concern
                        </div>
                    </div>


                </div>
            </div>

            <div className='right' >
                <img className='image' src={toon} ></img>
       
            </div>
          
        </div>
    )
}

export default Intro
