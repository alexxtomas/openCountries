import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CountriesContext } from '../context/CountriesContext'
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

  if (which === 'mostPopulous') {
    index = 0
  } else if (which === 'smallest') {
    index = 1
  }

  const { title, data } = tops[index]

  return (
    <>
      <h3 className='text-4xl tracking-wide mb-4'>{title}</h3>
      <ul>
        {
          data.map(({ commonName, flag }) => <li className='text-2xl cursor-pointer p-3' key={commonName}><Link to={`/country/${commonName}`}>{commonName} <img className='w-9 h-6 inline  object-fill' src={flag} alt={commonName} /></Link></li>)
        }
      </ul>
    </>
  )
}

export default Top10
