import React, { useEffect, useState } from 'react'
import CovidCard from './CovidCard'


export default function CovidApp() {
  const [covidData, setCovidData] = useState('')





  const getCovidData = async() =>{

    try {
      const res = await fetch("https://data.covid19india.org/data.json")
      const data = await res.json()
     
console.log("data", data.statewise[0])
setCovidData(data.statewise[0])
    } 
    
    
    
    catch (error) {
      console.log("error")
    }


  }





useEffect(()=>{
  getCovidData()
},[])

  return (
    <div>
      <CovidCard covidData={covidData}/>
    </div>
  )
}

