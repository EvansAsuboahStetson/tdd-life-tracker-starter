import React from 'react'
import './NutritionCards.css'

function NutritionCards({ nutrition }) {
  console.log('nutritioncards', nutrition)
  return (
    <div className="NutritionCard">
      <div className="card-header">
        <img src={nutrition.image_url} alt="nutrition" />
        <h2 className="title">{nutrition.name}</h2>
      </div>
      <div className="card-stats">
        <div className="CardStat">
          <p>Calories</p>
          <span>{nutrition.calories}</span>
        </div>
        <div className="CardStat">
          <p>Quantity</p>
          <span>1</span>
        </div>
      </div>
      <div className="card-meta">
        <small>Last Friday at 12:22 PM</small>
              <small className="category">{nutrition.category}</small>
      </div>
    </div>
  )
}

export default NutritionCards
