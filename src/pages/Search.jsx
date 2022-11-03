import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CountriesContext } from '../context/CountriesContext'
const Search = () => {
  const countries = useContext(CountriesContext)
  const [filter, setFilter] = useState('')
  const [filtredCountries, setFiltredCountries] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setFiltredCountries(countries.filter(({ commonName }) => commonName.toUpperCase().includes(filter.toUpperCase())))
  }, [filter])

  const handleClick = (evt) => {
    navigate(`/country/${evt.target.id}`)
  }

  return (
    <section className='min-h-screen text-white bg-gray-900 body-font '>
      <div className='text-center w-full  mb-10'>
        <input className='w-3/6 h-8 rounded-lg text-center bg-slate-100 text-black focus:ring-3 dark:bg-transparent' placeholder='Search a country ' type='search' value={filter} onChange={(evt) => setFilter(evt.target.value)} />
      </div>
      <div className='flex flex-wrap justify-around gap-5'>
        {
          filtredCountries.map(({ flag, commonName }) => {
            return (
              <figure onClick={handleClick} key={commonName} id={commonName} className='cursor-pointer'>
                <img onClick={handleClick} id={commonName} alt={`${commonName} flag`} src={flag} className='w-96 h-56 object-fill rounded-lg' />
                <figcaption className='text-center text-2x1 font-bold tracking-tight  ' id={commonName}>{commonName}</figcaption>
              </figure>
            )
          })
        }
      </div>
    </section>
  )
}
export default Search
