import React, { useEffect } from "react";
import Info from "./Components/info";
import Form from "./Components/form";
import WeatherInfo from "./Components/weatherInfo";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setWeather } from "./Store/citySlice";
import s from "./app.module.scss";
import { useState } from "react";

const App = () => {
  const city = useSelector((store) => store.city.city);
  const dispatch = useDispatch();

  const [error, setError] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e825f9ce1d188460799453351c4b2dc2&units=metric`
      )
      .then((response) => {
        dispatch(setWeather(response.data), setError(false));
      })
      .catch((error) => setError(true));
  }, [city]);

  return (
    <div className={s.app}>
      <div className={s.content}>
        <Info />
        <Form />
        {error ? (
          <div className={s.error}>
            Введите корректное название населенного пункта!
          </div>
        ) : (
          <WeatherInfo />
        )}
      </div>
    </div>
  );
};

export default App;
