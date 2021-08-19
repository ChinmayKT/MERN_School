import React from 'react'
import './pricecard.css'

const Pricecard = ({price , type}) => {
    return (
        <div className='can' >
            <div className='priceContainer' >
               ₹<span className='pri' >{price}</span>/month
               </div>
               <button className='type' >{type}</button>
               <ul className='lis' >
                   <li className='listitem' >200 Hand-Crafted Templates</li>
                   <li className='listitem' >200 Hand-Crafted Templates</li>
                   <li className='listitem' >200 Hand-Crafted Templates</li>
                   <li className='listitem' >200 Hand-Crafted Templates</li>
               </ul>
               <button className='bb' >Join Now</button>
           
        </div>
    )
}

export default Pricecard
