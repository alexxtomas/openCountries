import { transformCountries } from '../utils/transformCountries'

const baseURL = 'https://restcountries.com/v3.1'

const getAllCountries = async () => {
  try {
    const request = await fetch(`${baseURL}/all`)
    const data = await request.json()
    return transformCountries(data)
  } catch (e) {
    console.error(e)
  }
}

const getCountryByName = async (country) => {
  try {
    const request = await fetch(`${baseURL}/name/${country}`)
    const data = await request.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export default { getAllCountries, getCountryByName }
