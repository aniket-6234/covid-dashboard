import React from 'react'
import TrackerData from './TrackerData';
import CurrentData from './CurrentData';

const Main = ({ data }) => {
  return (
    <div className="main">
       <div className="container-1">
         <div className="poster">
              <div className="poster-head"> 
                <h1>Hello, Covid Warrior!</h1>
                <h3>Fight against the corona virus and book your vaccination slot here.</h3>
                <button className="btn-book-slot">
                  <a className="a-link" href="https://www.cowin.gov.in/" target="_blank">Book a Slot</a>
                </button>
              </div>
              <img  className="doctor-img" src="asset/doctor.svg" alt="doctor" />
         </div>

         <TrackerData data={data}/>
       </div>



       <div className="container-2">
         <CurrentData data={data} />
       </div>   
    </div>
  )
}

export default Main
