import React from "react";
import "../components/covid.css";

export default function CovidCard({covidData}) {

console.log("coviddata", covidData)

  return (
    <div className="covid">
      <div className="main">
        <div className="a">
          <h3 className="text1">LIVE</h3>
          <h3 className="text2">COVID-19 DETECTOR TRACTER</h3>
        </div>
        <div className="b">
          <div className="b1">
            <div className="card1">
              <p className="text3">OUR COUNTRY</p>
              <p className="text4">INDIA</p>
            </div>
            <div className="card1">
              <p className="text3">{covidData.recovered}</p>
              <p className="text4">123455</p>
            </div>
            <div className="card1">
              <p className="text3">{covidData.confirmed}</p>
              <p className="text4">123344</p>
            </div>
            <div className="card1">
              <p className="text3">{covidData.deaths}</p>
              <p className="text4">12334</p>
            </div>
            <div className="card1">
              <p className="text3">TOTAL ACTIVE</p>
              <p className="text4">{covidData.active}</p>
            </div>
            <div className="card1">
              <p className="text3">LAST UPDATED</p>
              <p className="text4">

              12/12/2021<br/>
              05:05:21
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
