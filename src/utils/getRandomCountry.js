import { randomNumber } from './randomNumber'

export const getRandomCountry = (countries) => countries[randomNumber(countries.length)]
