import React from 'react'
import Boxes from '../boxes/Boxes'
import Background from '../ContentHome/Background'
import DeliverySec from '../DeliverySec/DeliverySec'
import Diseases from '../Diseases/Diseases'
import Disease from '../Disease/Disease'
import Filter from '../Filter/Filter'
import Register from '../Register/Register'
import Login from '../Login/Login'
import ProductItem from '../ProductItem/ProductItem'

export default function Home() {
  return (
    <>
      <Background />

      <Filter />
      <Diseases />
      <Disease />
      <DeliverySec />
      <Boxes />
   

    </>
  )
}
