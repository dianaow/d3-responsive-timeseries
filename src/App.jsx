import React, { useState, useEffect } from "react";
import * as d3 from "d3";

import LineBarSeries from "./components/ChartBar/LineBarSeries";

import ChartWithPanel from "./components/ChartPanel/ChartWithPanel";
import { Provider } from "./components/ChartPanel/Provider";
import { getData, getNewData } from "./utils/getData";

import './App.css'

const metricsAttrs = {position: 'top', value: "maximum", categories: {'heart_rate': 'Heart Rate', 'heart_intensity': 'Heart Intensity', 'blood_pulse': 'Blood Pulse'}}

const App = () => {

  const [datetime, setDateTime] = useState({'start': new Date(), 'current': new Date()});
  const [data, setData] = useState(null)
  const LineBarChart = ChartWithPanel((props) => <LineBarSeries {...props}/>)
  //const milliseconds = 60000 //this will update the chart every minute
  const milliseconds = 1000 //this will update the chart every second (for testing purposes)
  const timeFormat = milliseconds === 1000 ? d3.timeFormat("%H:%M:%S %p") : d3.timeFormat("%H:%M %p")

  useEffect(() => {

  }, [])

  useEffect(() => {

    setData(getData(milliseconds))

    const interval = setInterval(() => {

      const current = new Date()

      let dataInitial = getData(milliseconds)
      let dataToAdd = getNewData(current, milliseconds)
      
      setData(dataInitial)
      setDateTime({'start': new Date(new Date().setHours(new Date().getHours() + dataInitial.hours)), 'current': current})

      if(data){
        setData({'heart': [{...data.heart, ...dataToAdd.hrNew}], 'blood_pulse': [{...data.blood_pulse, ...dataToAdd.bpNew}] }) 
      }

    }, milliseconds);
    return () => clearInterval(interval);

  }, []);

  return (
    <>
    {data && 
    <div className="wrapper">
      <div className="header">
        <h2>MONITORING PATIENT VITALS</h2>
        <div className='header-details'>
          <p><span style={{fontWeight: 'bold'}}>Patient ID:</span> 352405</p>
          <p><span style={{fontWeight: 'bold'}}>Datetime Range:</span> {d3.timeFormat("%B %d, %Y")(datetime.start)} {timeFormat(datetime.start) + ' - ' + timeFormat(datetime.current)}</p>
        </div>
      </div>
      <div className="box">
        <Provider>
        <LineBarChart
          data={data} 
          metrics={metricsAttrs}
          timeformat={timeFormat}
        />
        </Provider>       
      </div>
    </div>}
    </>
  )
}

export default App