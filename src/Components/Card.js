import React from 'react'

export const Card = ({total,curr}) => {
    console.log(total,curr)
  return (
    <div className='Card'>Card {curr%total}</div>
  )
}
