import { useContext } from 'react'
import { CountriesContext } from '../context/CountriesContext'
import CountryLink from './CountryLink'
const Top10 = ({ which }) => {
  const countries = useContext(CountriesContext)
  const tops = [
    {
      title: 'Top 10 Most Populous Countries',
      data: [...countries].sort((a, b) => b.population - a.population).splice(0, 10)
    },
    {
      title: 'Top 10 Smallest Countries By Population',
      data: [...countries].sort((a, b) => a.population - b.population).splice(6, 10)
    }
  ]
  let index
  if (which === 1) index = 0
  else if (which === 2) index = 1
  else index = 1

  const { title, data } = tops[index]

  return (
    <>
      <h3 className=' text-3xl font-semibold tracking-wide mb-4'>{title}</h3>
      <ol className='pr-5'>

        {
          data.map(({ commonName, flag }) => <li key={commonName} className='text-xl pl-15 pb-2'><CountryLink name={commonName} flag={flag} /></li>)
        }

      </ol>
    </>
  )
}

export default Top10

//  <li key={commonName} className='text-xl pl-10'> <CountryLink name={commonName} falg={falg} /> </li>
