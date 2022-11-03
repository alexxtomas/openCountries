import facts from '../data/curiousFacts'
import { randomNumber } from './randomNumber'

export const getRandomFact = () => facts[randomNumber(facts.length)]
