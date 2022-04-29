import React from 'react'
import './CarCard.css'
function CarCard(props) {
  return (
    <div className='card-ctn'>
        <p>{props.year}</p>
        <p>{props.make}</p>
        <p>{props.model}</p>
        <p>{props.interior}</p>
        <p>{props.doors}</p>
        <p>{props.price}</p>
        <p>{props.description}</p>
    </div>
  )
}

export default CarCard