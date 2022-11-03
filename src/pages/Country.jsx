import { useParams } from 'react-router-dom'
import CountryDetails from '../components/CountryDetails'
import { useCountry } from '../hooks/useCountry'
const Country = () => {
  const { name } = useParams()
  const { country, loading } = useCountry(name)

  if (loading) return <h1 className='text-white min-w-full bg-gray-900'>Loading...</h1>

  return (
    <section className='text-white min-w-full  flex flex-col  min-h-screen  bg-gray-900 body-font'>
      <CountryDetails country={country} />
    </section>

  )
}

export default Country

// import openWeather from '../services/openWeather'

// const [weather, setWeather] = useState({})

// openWeather.getWeather(country.capital.latlng[0], country.capital.latlng[0])
//   .then(data => setWeather(data))

/* <div className=' flex flex-col mt-10 text-3xl w-full h-full justify-center items-center gap-y-8 text-center'>
        <div>
          <h3 className='text-5xl m-0s'>Current Weather in {country?.capital?.name[0]} <img className='w-18 h-18 object-contain inline bg-slate-100 rounded-xl border-solid border-2 border-black' src={weather.icon} alt='icon of weather' /></h3>
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
      </div> */
