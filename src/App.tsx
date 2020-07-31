import React, { useState } from "react";
import { Input } from "./Components/Input";
import { getDate as Date } from "./Components/getDate";
import styles from "./Style/App.module.css";

function App() {
  const [weather, setWeather] = useState<any>({});

  return (
    <div className={styles.app}>
      <div>
        <Input getWeather={setWeather} />
      </div>
      <div className={styles.app__weather}>
        {weather.main && (
          <>
            <h3 className={styles.nameCountry}>
              {weather.name} ,{weather.sys.country}
            </h3>
            <div className={styles.weather__header}>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <Date />
            </div>
            <h1 className={styles.temp}>
              {Math.round(weather.main.temp)}
              <sup> &deg;C</sup>
            </h1>
            <p>{weather.weather[0].description}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
