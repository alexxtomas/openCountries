import { transformDate } from '../utils/transfromDate'

const APIKEY = import.meta.env.VITE_OPENWEATHER_KEY

const getWeather = async (lat, lon) => {
  const request = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`)
  const data = await request.json()
  const { current } = data
  return {
    date: transformDate(current.dt),
    humidity: `${current.humidity}%`,
    pressure: `${current.pressure} hPa`,
    temperature: `${current.temp}°C`,
    feelsLike: `${current.feels_like}°C`,
    visibility: `${Number(current.visibility) / 1000}km`,
    icon: `http://openweathermap.org/img/w/${current.weather[0].icon}.png`,
    windy: `${current.wind_speed} km/h`

  }
}

export default { getWeather }
