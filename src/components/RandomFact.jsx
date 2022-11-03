import { useContext } from 'react'
import { CountriesContext } from '../context/CountriesContext'
import { getRandomFact } from '../utils/getRandomFact'
import CountryLink from './CountryLink'

const RandomFact = () => {
  const { country: countryFact, fact, font } = getRandomFact()
  const countries = useContext(CountriesContext)
  const country = countries?.find(c => c.commonName === countryFact)

  return (
    <>
      <h3 className='text-xl'><CountryLink name={countryFact} flag={country?.flag} reverse /></h3>
      <p>{fact}</p>
      <p>Font: <a href={font} target='_blank' rel='noreferrer'>{font}</a></p>

    </>
  )
}

export default RandomFact
