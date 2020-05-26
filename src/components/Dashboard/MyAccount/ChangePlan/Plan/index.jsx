import React from 'react'
import { PlanContainer, Price, Cycle } from './styles'

const Plan = ({ name, price, cycle, currentPlan, selectedPlan, onClick }) => {
  const isCurrent = name.toUpperCase() === currentPlan.toUpperCase()
  const isSelected = selectedPlan.toUpperCase() === name.toUpperCase()

  return (
    <PlanContainer onClick={onClick} isSelected={isSelected && !isCurrent}>
      <h3 className={isCurrent ? 'is-current' : ''}>{name}</h3>
      {isCurrent ? (
        <Price className={isCurrent ? 'is-current' : ''}>Current</Price>
      ) : (
        <Price className={isCurrent ? 'is-current' : ''}>
          ${price.toLocaleString()}
          <br />
          <Cycle>{cycle}</Cycle>
        </Price>
      )}
    </PlanContainer>
  )
}

export default Plan
