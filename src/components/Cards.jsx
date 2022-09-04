import React from 'react'
import { CardData } from '../utils/CardData'

const Cards = () => {
  return (
    <div className='card container'>
      <div className="card-header">
        <p>Advanced Statistics</p>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>

      <div className="card-all">
        {CardData.map((item, index) => (
          <div className="card-all-each" key={index}>
            <div className='card-all-each-img'><img src={item.icon} alt={item.title} /></div>
            <p>{item.title}</p>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards