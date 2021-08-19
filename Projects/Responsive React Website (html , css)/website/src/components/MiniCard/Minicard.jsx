import React from 'react'
import './Mini.css'
import  search from '../../img/Search.png'

const Minicard = () => {
    return (
        <div className='conta' >
            <img className='pict' src={search} ></img>
            <span className='text'>YouTube , Udemy , Blogs </span>
            
        </div>
    )
}

export default Minicard
