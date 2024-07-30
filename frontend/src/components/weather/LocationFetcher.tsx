'use client'; // Указываем, что компонент используется только на клиентской стороне

import { useEffect, useState } from 'react'; // Импортируем хуки useEffect и useState из React
import axios from 'axios'; // Импортируем axios для выполнения HTTP-запросов
import CurrentWeather from './CurrentWeather/CurrentWeather'; // Импортируем компонент CurrentWeather
import FiveDayForecast from './FiveDayForecast/FiveDayForecast'; // Импортируем компонент FiveDayForecast
import styles from './locationfetcher.module.sass';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Получаем ключ API для OpenWeatherMap из переменных окружения

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

// Интерфейс для структуры данных о прогнозе погоды
interface ForecastData {
  dt_txt: string; // Дата и время прогноза
  main: {
    temp: number; // Температура
    temp_max: number; // Максимальная температура
    temp_min: number; // Минимальная температура
  };
  weather: {
    description: string; // Описание погодных условий
  }[];
}

// Компонент LocationFetcher
const LocationFetcher: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null); // Состояние для хранения географических координат
  const [currentWeatherData, setCurrentWeatherData] = useState<WeatherData | WeatherData[] | null>(null); // Состояние для хранения данных о текущей погоде
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null); // Состояние для хранения данных о прогнозе погоды
  const [error, setError] = useState<string | null>(null); // Состояние для хранения сообщений об ошибках

  // Функция для получения данных о текущей погоде и прогнозе по координатам
  const fetchWeather = async (lat: number, lon: number) => {
    try {
      // Запрос к API для получения текущей погоды
      const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: 'metric',
          lang: 'ru'
        }
      });
      setCurrentWeatherData(response.data); // Сохраняем данные о текущей погоде в состоянии

      // Запрос к API для получения прогноза погоды
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: 'metric',
          lang: 'ru'
        }
      });
      setForecastData(forecastResponse.data.list); // Сохраняем данные о прогнозе погоды в состоянии
    } catch (error) {
      console.error('Ошибка при получении данных о погоде:', error); // Выводим сообщение об ошибке в консоль
    }
  };

  // Функция для получения данных о текущей погоде и прогнозе по списку городов
  const fetchWeatherForCities = async (cities: string[]) => {
    try {
      // Получаем данные о текущей погоде для каждого города
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
      setCurrentWeatherData(weatherDataArray); // Сохраняем данные о текущей погоде в состоянии

      // Получаем данные о прогнозе погоды для каждого города
      const forecastDataArray = await Promise.all(cities.map(async city => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
            lang: 'ru'
          }
        });
        return response.data.list;
      }));
      setForecastData(forecastDataArray.flat()); // Сохраняем данные о прогнозе погоды в состоянии
    } catch (error) {
      console.error('Ошибка при получении данных о погоде для городов:', error); // Выводим сообщение об ошибке в консоль
    }
  };

  // Эффект для получения геолокации пользователя при загрузке компонента
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

  // Эффект для получения данных о погоде при изменении местоположения
  useEffect(() => {
    if (location) {
      fetchWeather(location.lat, location.lon);
    }
  }, [location]);

  return (
    <div>
      {error && <p>{error}</p>} {/* Если есть ошибка, отображаем сообщение об ошибке */}
      <div className={styles.currentWeather}>
        <p>Погода сегодня</p>
        {currentWeatherData ? (
          <CurrentWeather weatherData={currentWeatherData} /> 
        ) : (
          <p>Загрузка данных о погоде... При необходимости используйте VPN, тк данные берутся с OpenWeather</p>
        )}
      </div>
      <div className={styles.forecast}>
        <p>Прогноз на 5 дней</p>
        {forecastData ? (
        <FiveDayForecast forecastData={forecastData} /> 
        ) : (
        <p>Загрузка прогноза погоды... При необходимости используйте VPN, тк данные берутся с OpenWeather</p>
        )}
      </div>
      
    </div>
  );
};

export default LocationFetcher;