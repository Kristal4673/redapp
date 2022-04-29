import React from 'react'
import './Filter.css'
function Filter() {
  return (
    <div className='home-filter-ctn'>
        <form className='home-filter'>
            <div className='filter-container'>
                <label htmlFor="filter">Year</label>
                <input type="text" name="filter" id="filter" />
            </div>
            <div className='filter-container'>
                <label htmlFor="filter">Make</label>
                <input type="text" name="filter" id="filter" />
            </div>
            <div className='filter-container'>
                <label htmlFor="filter">Model</label>
                <input type="text" name="filter" id="filter" />
            </div>
            <div className='filter-container'>
                <label htmlFor="filter">Interior</label>
                <input type="text" name="filter" id="filter" />
            </div>
            <div className='filter-container'>
                <label htmlFor="filter">Doors</label>
                <input type="text" name="filter" id="filter" />
            </div>
        </form>
    </div>
  )
}

export default Filter