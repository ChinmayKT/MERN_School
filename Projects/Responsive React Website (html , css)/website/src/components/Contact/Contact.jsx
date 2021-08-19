import React from 'react'
import './cont.css'
import q from '../../img/q.jpeg'
import AnimationShape from '../Animation/AnimationShape'

const Contact = () => {
    return (
        <div className='mug' >
            <div className='closer' > 
               

            <div className='addressConatiner'>
                <img  className='ques' src={q} ></img>
            </div>

            <div className='formContanier'>
                    <h1 className='tit' >if any Questions ?</h1>
                        <div className='form' >

                            <div className='leftForm' >
                                <input className='Inp' placeholder='Name' ></input>
                                <input className='Inp' placeholder='Email'></input>
                                <input className='Inp' placeholder='Subject'></input>
                            </div>

                            <div className='rightForm' >
                                <textarea className='textArea' placeholder='Message' ></textarea>
                                <button className='press' > Send </button>
                            </div>
                    </div>          
                </div>
<AnimationShape/>
            </div>
            
        </div>
    )
}

export default Contact
