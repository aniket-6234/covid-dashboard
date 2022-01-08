import React from 'react'

const Header = () => {
  return (


    <div className="header">
      <div className="box-1">
          <h1 className="title light">Covid</h1>
          <h1 className="title bold">Tracker</h1>
      </div>
      
      <div className="box-2">
           <div className="search-box">
               <img  className="search-icon" src="/asset/search.svg" alt="Search" />
               <input className="input-search" type="text" placeholder="Enter the city name..." />
            </div>

            <div className="btn-search">
               <h2>Search</h2>
            </div>
      </div>

    </div>
  )
}

export default Header
