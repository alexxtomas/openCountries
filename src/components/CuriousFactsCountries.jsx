import { randomNumber } from '../utils/randomNumber'
import RandomFact from './RandomFact'
import Top10 from './Top10'

const CuriousFactsCountries = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      <Top10 which={randomNumber(2)} />
      <RandomFact />
    </div>
  )
}

export default CuriousFactsCountries
