import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CountriesContext } from '../context/CountriesContext'
const Search = () => {
  const countries = useContext(CountriesContext)
  const [limit, setLimit] = useState(9)
  const [filtredCountries, setFiltredCountries] = useState(countries.slice(0, limit))
  const checkpoint = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLimit(limit => limit + 9)
        setFiltredCountries(countries.slice(0, limit))
      }
    })

    observer.observe(checkpoint.current)

    return () => {
      observer.disconnect()
    }
  })

  const handleChange = ({ target }) => {
    setFiltredCountries(countries.filter(({ commonName }) => commonName.toUpperCase().includes(target.value.toUpperCase())))
  }

  return (
    <section className='min-h-screen text-white bg-gray-900 body-font '>
      <div className='text-center w-full  mb-10'>
        <input className='w-3/6 h-8 rounded-lg text-center bg-slate-100 text-black focus:ring-3 dark:bg-transparent' placeholder='Search a country ' type='search' onChange={handleChange} />
      </div>
      <div className='flex flex-wrap justify-around gap-5'>
        {
          filtredCountries.map(({ flag, commonName }) => {
            return (
              <figure onClick={() => navigate(`/country/${commonName}`)} key={commonName} className='cursor-pointer'>
                <img alt={`${commonName} flag`} src={flag} className='w-96 h-56 object-fill rounded-lg' />
                <figcaption className='text-center text-2x1 font-bold tracking-tight'>{commonName}</figcaption>
              </figure>
            )
          })
        }
      </div>
      <div ref={checkpoint} />
    </section>
  )
}
export default Search
