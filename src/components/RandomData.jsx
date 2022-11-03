import { useContext } from 'react'
import { CountriesContext } from '../context/CountriesContext'
import { getRandomFact } from '../utils/getRandomFact'
import CountryLink from './CountryLink'

const RandomFact = () => {
  const { country, fact, font } = getRandomFact()
  const countries = useContext(CountriesContext)
  const { flag } = countries?.find(c => c.commonName === country)
  return (
    <>
      <h3 className='text-xl'><CountryLink name={country} flag={flag} reverse /></h3>
      <p>{fact}</p>
      <p>Font: <a href={font} target='_blank' rel='noreferrer'>{font}</a></p>

    </>
  )
}

export default RandomFact
