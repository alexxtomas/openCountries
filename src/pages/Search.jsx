import { useContext, useRef } from 'react'
import CountryListOfCards from '../components/CountryListOfCards'
import SearchEngine from '../components/SearchEngine'
import { CountriesContext } from '../context/CountriesContext'
import { useFilterObserver } from '../hooks/useFilterObserver'
const Search = () => {
  const countries = useContext(CountriesContext)
  const checkpoint = useRef(null)
  const { filtredElements, setFiltredElements } = useFilterObserver(9, checkpoint, countries)

  const handleChange = ({ target }) => {
    setFiltredElements(countries.filter(({ commonName }) => commonName.toUpperCase().includes(target.value.toUpperCase())))
  }

  return (
    <section className='min-h-screen text-white bg-gray-900 body-font '>

      <SearchEngine handleChange={handleChange} placeholder='Search a country' />
      <CountryListOfCards elements={filtredElements} />

      <div ref={checkpoint} />
    </section>
  )
}
export default Search
