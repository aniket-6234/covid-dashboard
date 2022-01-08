import React from 'react'

const CurrentData = ({ data }) => {
  return (
    <>
    <div className="side-box">
       <img className="corona" src="asset/corona.svg" alt="corona"/>
       <div className="current-head">
          <h3>Total cases in</h3>
          <h2 className="india">India</h2>
          <h1>{data?.response[202]?.cases?.total}</h1>
          <div className="line-1"></div>
       </div>
    </div>

    <div className="side-box-2">
      <div className="block">
        <div class="flex-box">
            <div className="green-circle"></div>
            <p>Recovered</p>
        </div>
          <h3 className="small-number">{data?.response[202]?.cases?.recovered}</h3>
      </div>

      <div className="block">
        <div class="flex-box">
            <div className="red-circle"></div>
            <p>Deaths</p>
        </div>
          <h3 className="small-number">{data?.response[202]?.deaths?.total}</h3>
      </div>

      <div className="block">
        <div class="flex-box">
            <div className="orange-circle"></div>
            <p>Affected</p>
        </div>
          <h3 className="small-number">{data?.response[202]?.cases?.critical}</h3>
      </div>
        
    </div>

    <div className="side-box-3">
        <div className='last-div'>
          <p className="para">Avoid touching surfaces, especially in public settings or health facilities, in case people infected with COVID-19 have touched them. Clean surfaces regularly with standard disinfectants.</p>

          <h2 className="owner">- Aniket A. Raikwar</h2>
        </div>
        <img className="gravity" src="asset/aniket.svg" alt="creator" />
    </div>

    
    </>
  )
}

export default CurrentData
