import React from 'react'

const TrackerData = ({ data }) => {
  return (
    <div className="tracker-container"> 
        <div className="show-data">
            <div className="sub-box">
              <h2 className="top-head">Confirmed</h2>
              <h3 className="case-head">Cases</h3>
              <h1 className="cases">{data?.response[202]?.cases?.total}</h1>
              <div className="line"></div>
            </div>

            <div className="sub-box">
              <h2 className="top-head">Active</h2>
              <h3 className="case-head">cases</h3>
              <h1 className="cases">{data?.response[202]?.cases?.active}</h1>
              <div className="line"></div>
            </div>

            <div className="sub-box">
              <h2 className="top-head">Recovered</h2>
              <h3 className="case-head">Cases</h3>
              <h1 className="cases">{data?.response[202]?.cases?.recovered}</h1>
              <div className="line"></div>
            </div>

            <div className="sub-box">
              <h2 className="top-head">Death</h2>
              <h3 className="case-head">Cases</h3>
              <h1 className="cases">{data?.response[202]?.deaths?.total}</h1>
              <div className="line"></div>
            </div>
           
        </div>

        <div className="show-data-1">
            <div className="box">
                <div>
                  <h3 className="box-h3">Download</h3>
                  <h2 className="box-h2">
                    <a className="a-tag" href="https://selfregistration.cowin.gov.in/" target="_blank">Vaccination Certificate</a></h2>
                </div>
                <img className="arrow" src="/asset/arrow.svg" alt="arrow" />  
            </div>

            <div className="box">
                <div>
                  <h3 className="box-h3">Get Corona</h3>
                  <h2 className="box-h2">
                    <a className="a-tag" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank">Natural Precautions</a>
                    </h2>
                </div>
                <img className="arrow" src="/asset/arrow.svg" alt="arrow" />  
            </div>

            <div className="box last-box">
                <div>
                  <h3 className="box-h3">Live</h3>
                  <h2 className="box-h2">
                    <a className="a-tag" href="https://timesofindia.indiatimes.com/india" target="_blank">Corona News</a>
                  </h2>
                </div>
                <img className="arrow" src="/asset/arrow.svg" alt="arrow" />  
            </div>
           
        </div>


        
    </div>
  )
}

export default TrackerData
