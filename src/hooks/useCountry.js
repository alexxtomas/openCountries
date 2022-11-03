import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CountriesContext } from '../context/CountriesContext'
import restCountries from '../services/restCountries'

export const useCountry = (name) => {
  const [country, setCountry] = useState({})
  const [loading, setLoading] = useState(true)
  const countries = useContext(CountriesContext)

  const navigate = useNavigate()
  useEffect(() => {
    const getCountryFromLocalStorage = JSON.parse(window.localStorage.getItem(`${name}`) || 'null')
    if (!getCountryFromLocalStorage) {
      const findCountry = countries.find(({ commonName }) => commonName === name)
      if (!findCountry) {
        restCountries.getCountryByName(name)
          .then(data => {
            if (data?.status === 404) navigate('/NotFound')
            setCountry(data)
            window.localStorage.setItem(`${name}`, JSON.stringify(data))
            setLoading(false)
          })
      }
      setCountry([findCountry])
      window.localStorage.setItem(`${name}`, JSON.stringify(findCountry))
      setLoading(false)
    }
    setCountry(getCountryFromLocalStorage)
    setLoading(false)
  }, [])

  return { country, loading }
}
