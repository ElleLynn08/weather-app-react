import React from "react";

import "./App.css";
import "./Weather.css";

export default function Weather() {
  let data = {
    city: "Seattle",
    date: "01 June 2023",
    day: "Saturday",
    description: "Cloudy",
    feelsLike: "78",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    temperature: "80",
    time: "16:00",
    humidity: "80",
    wind: "5",
  };

  return (
    <div className="container">
      <div className="data">
        <div className="row">
          <div className="col">
            <div className="date">
              <p> {data.day}</p>
              <p> {data.date}</p>
              <p>Time: {data.time}</p>
            </div>
          </div>

          <div className="col">
            <div className="cityTemp">
              <h1>{data.city}</h1>
              <h2>
                {data.temperature}
                <span className="units" id="units">
                  <a href=" " id="fahrenheitLink" className="active">
                    ℉{" "}
                  </a>{" "}
                  |
                  <a href=" " id="celsiusLink">
                    {" "}
                    ℃
                  </a>
                </span>
              </h2>
              <img src={data.imgUrl} alt="clouds" />
              <p>{data.description}</p>
            </div>
          </div>

          <div className="col">
            <div className="conditions">
              <p>
                Feels like: {data.feelsLike}
                <span>°</span>{" "}
              </p>
              <p>Wind: {data.wind} mph</p>
              <p>Humidity: {data.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
