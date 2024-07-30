import React from 'react';

import styles from './FiveDayForecast.module.sass';

// Интерфейс для структуры данных о прогнозе погоды
interface ForecastData {
  dt_txt: string; // Дата и время прогноза
  main: {
    temp: number; // Температура
    temp_max: number; // Максимальная температура
    temp_min: number; // Минимальная температура
    city: string;
  };
  weather: {
    description: string; // Описание погодных условий
  }[];
}

// Интерфейс для пропсов компонента FiveDayForecast
interface FiveDayForecastProps {
  forecastData: ForecastData[]; // Данные о прогнозе погоды
}

// Компонент для отображения прогноза погоды на 5 дней
const FiveDayForecast: React.FC<FiveDayForecastProps> = ({ forecastData }) => {
  // Фильтруем данные, чтобы показывать прогноз на каждый день в полдень
  const dailyForecast = forecastData.filter(item => item.dt_txt.includes('12:00:00'));

  return (
    <div className={styles.container}>
      {dailyForecast.map((forecast, index) => (
        <div className={styles.forecastItem} key={index}>
          <h3>{new Date(forecast.dt_txt).toLocaleDateString('ru-RU')}</h3>
          <p>Температура: {forecast.main.temp}°C</p>
          <p>Максимальная: {forecast.main.temp_max}°C</p>
          <p>Минимальная: {forecast.main.temp_min}°C</p>
          <p>Погода: {forecast.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default FiveDayForecast;
