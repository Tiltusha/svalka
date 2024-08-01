import React from 'react';

// Интерфейс для структуры данных о погоде
interface WeatherData {
  name: string; // Название города
  main: {
    temp: number; // Текущая температура
    temp_max: number; // Максимальная температура
    temp_min: number; // Минимальная температура
  };
  weather: {
    description: string; // Описание погодных условий
  }[];
}

// Интерфейс для пропсов компонента CurrentWeather
interface CurrentWeatherProps {
  weatherData: WeatherData | WeatherData[]; // Данные о погоде (могут быть для одного или нескольких городов)
}

// Компонент для отображения текущей погоды
const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData }) => {
  return (
    <div>
      {Array.isArray(weatherData) ? ( // Проверяем, является ли weatherData массивом
        weatherData.map((cityWeather, index) => ( // Если да, отображаем данные для каждого города
          <div key={index}>
            <h2>{cityWeather.name}</h2>
            <p>Температура: {cityWeather.main.temp}°C</p>
            <p>Максимальная: {cityWeather.main.temp_max}°C</p>
            <p>Минимальная: {cityWeather.main.temp_min}°C</p>
            <p>Погода: {cityWeather.weather[0].description}</p>
          </div>
        ))
      ) : (
        <div>
          <h2>{(weatherData as WeatherData).name}</h2>
          <p>Температура: {(weatherData as WeatherData).main.temp}°C</p>
          <p>Максимальная: {(weatherData as WeatherData).main.temp_max}°C</p>
          <p>Минимальная: {(weatherData as WeatherData).main.temp_min}°C</p>
          <p>Погода: {(weatherData as WeatherData).weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
