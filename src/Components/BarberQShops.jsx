import React from 'react'
import { Barbershop } from './Barbershop'
import { NewToBarberQ } from './new-to-barberq'
import { Trending } from './trending'

const BarberQShops = () => {
  return (
    <div>

      <Barbershop />
      <NewToBarberQ />
      <Trending/>
    </div>
  )
}

export default BarberQShops
