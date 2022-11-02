import { useEffect, useState } from 'react'
import restCountries from '../services/restCountries'

export const useCountries = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const countriesFromLocalStorage = JSON.parse(window.localStorage.getItem('countries'))
    if (!countriesFromLocalStorage) {
      restCountries.getAllCountries()
        .then(data => {
          console.log(data)
          setCountries(data)
          window.localStorage.setItem('countries', JSON.stringify(data))
        })
    } else {
      setCountries(countriesFromLocalStorage)
    }
  }, [])

  return { countries }
}
