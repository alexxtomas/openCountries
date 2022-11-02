import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CountryDetails from '../components/CountryDetails'
import { CountriesContext } from '../context/CountriesContext'
import openWeather from '../services/openWeather'

const Country = () => {
  const countries = useContext(CountriesContext)
  const [weather, setWeather] = useState({})
  const { name } = useParams()
  const navigate = useNavigate()
  const country = countries.find(({ commonName }) => commonName === name)
  useEffect(() => {
    if (!country) navigate('*')
    openWeather.getWeather(country.capital.latlng[0], country.capital.latlng[0])
      .then(data => setWeather(data))
  }, [])

  return (
    <section className='min-w-full min-h-screen flex flex-col mt-12'>
      <CountryDetails country={country} />
      <div className=' flex flex-col mt-10 text-3xl w-full h-full justify-center items-center gap-y-8 text-center'>
        <div>
          <h3 className='text-5xl m-0s'>Current Weather in {country.capital.name[0]} <img className='w-18 h-18 object-contain inline bg-slate-100 rounded-xl border-solid border-2 border-black' src={weather.icon} alt='icon of weather' /></h3>
        </div>
        <div className='flex w-full justify-center items-center gap-x-10'>

          <p className='text-center'>Date <span className='block'>{weather.date}</span></p>
        </div>
        <div className='flex w-full justify-center items-center gap-x-10'>
          <p className='text-center'>Temperature <span className='block'>{weather.temperature}</span></p>
          <p className='text-center'>Feels Like <span className='block'>{weather.feelsLike}</span></p>
          <p className='text-center'>Humidity <span className='block'>{weather.humidity}</span></p>
        </div>
        <div className='flex w-full justify-center items-center gap-x-10'>
          <p className='text-center'>Pressure <span className='block'>{weather.pressure}</span></p>
          <p className='text-center'>Visibility <span className='block'>{weather.visibility}</span></p>
          <p className='text-center'>Windy <span className='block'>{weather.windy}</span></p>
        </div>
      </div>
    </section>

  )
}

export default Country
