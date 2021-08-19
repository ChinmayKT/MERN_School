import React from 'react'
import './Feat.css'
import phone from '../../img/hand.jpeg'
import AnimationShape from '../Animation/AnimationShape'

const Feature = () => {
    return (
        <div className='container'>
            <div className='left'>
            <img className='Image' src={phone} ></img>
            </div>

            <div className="right">
                <span className='Title' >
                   <b> good </b>design <br/>
                   <b>good</b> practice
                </span>
                <span  className='subTitle'>
                    I think good design means good practice
                </span>
                <p className='desc'>
                    I have learnt Javascript , Node , Mongodb , React to become to MERN stack Developer,
                    Making websites and working on websites is more fun .
                </p>
                <button className='btn' >Learn More</button>

            </div>
            <AnimationShape/>
        </div>
    )
}

export default Feature
