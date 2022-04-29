import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import Filter from '../../Components/Filter/Filter'
import CarCard from '../../Components/CarCard/CarCard'
const Home = () => {
  return (
    <div>
      <Header />
      <div className='home-booking'>
        <Filter />
        <CarCard 
          year='2020'
          make='Toyota'
          model='Prius'
          interior='Leather'
          doors='4'
          price='$100,000'
          description='This is a description of the car'
        />
      </div>
    
    </div>
  )
}

export default Home
