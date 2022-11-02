import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CountriesContext } from '../context/CountriesContext'
import { getRandomCountry } from '../utils/getRandomCountry'

const RandomData = () => {
  const countries = useContext(CountriesContext)
  const randomCountry = getRandomCountry(countries.filter(country => country?.currencies))
  const countryName = randomCountry?.commonName
  const currenciesName = []
  if (randomCountry?.currencies) {
    const currencies = Object?.values(randomCountry?.currencies)
    currencies?.map(({ name }) => currenciesName.push(name))
  }
  if (currenciesName.length === 1) {
    return (
      <h3 className='text-4xl h-full text-center tracking-wide'>Did you know that the official currency in <Link className='text-red-400' to={`/country/${countryName}`}>{countryName}</Link>  is the {currenciesName[0]}?</h3>
    )
  }
}

export default RandomData
