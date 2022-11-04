import { useContext } from 'react'
import { CountriesContext } from '../context/CountriesContext'
import { getRandomFact } from '../utils/getRandomFact'
import CountryLink from './CountryLink'

const RandomFact = () => {
  const { country: countryFact, fact, font } = getRandomFact()
  const countries = useContext(CountriesContext)
  const country = countries?.find(c => c.commonName === countryFact)

  return (
    <div className='xl:w-2/4 lg:w-1/2 md:w-full px-8 py-6 justify-center my-auto mx-0   text-center'>
      <h3 className='text-xl'><CountryLink name={countryFact} flag={country?.flag} reverse /></h3>
      <p>{fact}</p>
      <p>Font: <a href={font} target='_blank' rel='noreferrer'>{font}</a></p>
      <button className='flex mx-auto mt-6 bg-slate-50 border-0 py-2 px-8 transition-all shadow-yellow-200 shadow-md focus:outline-none hover:bg-yellow-100 rounded-full text-lg'>💡</button>
    </div>
  )
}

export default RandomFact
