import React from 'react'
import {card} from '../constants/cardData'

const Card = () => {
  return (
    <div className='n'>
    <div className='o'>
    {card.map((data)=>{
        return(
           <div>
               <p>{data.description}</p>
               <img src={data.image} width="50px"/>
               <h4>{data.name}</h4>
           </div>
        );
    })}
    </div>
    </div>
  )
}

export default Card;