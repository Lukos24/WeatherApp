import React from "react";
import { useSelector } from "react-redux";
import s from "../Styles/weatherInfo.module.scss";

const WeatherInfo = () => {
  const weatherParam = useSelector((store) => store.city);
  console.log(weatherParam);
  if (weatherParam.weather === "") {
    return <div className={s.loading}>Загрузка...</div>;
  }

  return (
    <div className={s.weatherInfo}>
      <p>
        {weatherParam.city}
        <img
          className={s.locImage}
          src="https://cdn-icons-png.flaticon.com/512/927/927693.png"
          alt=""
        />
      </p>
      <p>Температура воздуха: {Math.round(weatherParam.weather.main.temp)} °</p>
      <p>Скорость ветра: {Math.round(weatherParam.weather.wind.speed)} м/с</p>
      <p>Давление: {weatherParam.weather.main.pressure} мбар</p>
      <p>Влажность: {weatherParam.weather.main.humidity} %</p>
    </div>
  );
};

export default WeatherInfo;
