import { createContext } from 'react'
import { useCountries } from '../hooks/useCountries'

export const CountriesContext = createContext()

export const CountriesProvider = ({ children }) => {
  const { countries } = useCountries()

  return (
    <CountriesContext.Provider value={countries}>
      {children}
    </CountriesContext.Provider>
  )
}
