'use client'; // Используется только на клиентской стороне

import { useEffect, useState } from 'react'; // Импортируем хук useEffect и useState из React
import axios from 'axios'; // Импортируем axios для работы с HTTP запросами

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Ключ для OpenWeatherMap API

interface WeatherData { // Интерфейс для структурирования данных о погоде
  name: string; // Название
  main: {
    temp: number; // Температура
  };
  weather: {
    description: string; // Описание погоды
  }[];
}

const LocationFetcher: React.FC = () => { // Компонент LocationFetcher
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null); // Состояние для хранения географических координат
  const [weatherData, setWeatherData] = useState<WeatherData | WeatherData[] | null>(null); // Состояние для хранения данных о погоде
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: 'metric',
          lang: 'ru'
        }
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных о погоде:', error);
    }
  };

  const fetchWeatherForCities = async (cities: string[]) => {
    try {
      const weatherDataArray = await Promise.all(cities.map(async city => {
        const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
            lang: 'ru'
          }
        });
        return response.data;
      }));
      setWeatherData(weatherDataArray);
    } catch (error) {
      console.error('Ошибка при получении данных о погоде для городов:', error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          // Если пользователь отказывается от предоставления местоположения
          fetchWeatherForCities(['Москва', 'Санкт-Петербург']);
          setError('Не удалось получить ваше местоположение. Показаны данные для Москвы и Санкт-Петербурга.');
        }
      );
    } else {
      // Если геолокация не поддерживается
      fetchWeatherForCities(['Москва', 'Санкт-Петербург']);
      setError('Геолокация не поддерживается вашим браузером. Показаны данные для Москвы и Санкт-Петербурга.');
    }
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeather(location.lat, location.lon);
    }
  }, [location]);

  return (
    <div>
      {error && <p>{error}</p>}
      {weatherData ? (
        Array.isArray(weatherData) ? (
          weatherData.map((cityWeather, index) => (
            <div key={index}>
              <h2>{cityWeather.name}</h2>
              <p>Температура: {cityWeather.main.temp}°C</p>
              <p>Погода: {cityWeather.weather[0].description}</p>
            </div>
          ))
        ) : (
          <div>
            <h2>{(weatherData as WeatherData).name}</h2>
            <p>Температура: {(weatherData as WeatherData).main.temp}°C</p>
            <p>Погода: {(weatherData as WeatherData).weather[0].description}</p>
          </div>
        )
      ) : (
        <p>Загрузка данных о погоде... При необходимости используйте VPN, тк данные берутся с OpenWeather</p>
      )}
    </div>
  );
};

export default LocationFetcher;
