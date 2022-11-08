import { useContext, useEffect, useRef, useState } from 'react'
import CountryListOfCards from '../components/CountryListOfCards'
import SearchEngine from '../components/SearchEngine'
import { CountriesContext } from '../context/CountriesContext'

// import { useFilterObserver } from '../hooks/useFilterObserver'
const Search = () => {
  const countries = useContext(CountriesContext)
  const [current, setCurrent] = useState(9)
  const [filtered, setFiltered] = useState([false, ''])
  const [countriesToShow, setCountriesToShow] = useState(countries.slice(0, 9))

  const checkpoint = useRef(null)

  useEffect(() => {
    setCurrent(9)
    setCountriesToShow(countries.filter(({ commonName }) => commonName.toUpperCase().includes(filtered[1]?.toUpperCase())).slice(0, current))
  }, [filtered])

  useEffect(() => {
    if (!filtered[0]) {
      const observer = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setCurrent(current + current)
          setCountriesToShow(countries.slice(0, current))
        }
      })

      observer.observe(checkpoint.current)
      return () => {
        observer.disconnect()
      }
    }
  })

  const handleChange = ({ target }) => {
    setFiltered([true, target.value])
  }
  // const { filtredElements, setFiltredElements } = useFilterObserver(9, checkpoint, countries)

  // const handleChange = ({ target }) => {
  //   setFiltredElements(countries.filter(({ commonName }) => commonName.toUpperCase().includes(target.value.toUpperCase())).slice(0, 9))
  // }

  return (
    <section className='min-h-screen text-white bg-gray-900 body-font '>

      <SearchEngine placeholder='Search a country' handleChange={handleChange} />
      <CountryListOfCards elements={countriesToShow} />

      <div ref={checkpoint} />
    </section>
  )
}
export default Search
