import React from 'react'
import './price.css'
import PriceCard from '../Pricecard/Pricecard'
import AnimationShape from '../Animation/AnimationShape'

const Price = () => {
    return (
        <div className='contay' >
            <AnimationShape/>
            <PriceCard price= '100' type='Basic' />
            <PriceCard  price= '200' type='Advance'/>
            <PriceCard  price= '300' type='Gold'/>
        </div>
    )
}

export default Price
