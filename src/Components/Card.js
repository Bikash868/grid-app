import React from 'react'

export const Card = ({total,curr}) => {
  return (
    <div className='Card'>Card {curr%total}</div>
  )
}
