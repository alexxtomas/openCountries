import CountryCard from './CountryCard'

const CountryListOfCards = ({ elements }) => {
  return (
    <div className='flex flex-wrap justify-around gap-5 min-h-screen'>
      {
          elements.map(({ flag, commonName }) => {
            return (
              <CountryCard key={commonName} name={commonName} flag={flag} />
            )
          })
        }
    </div>
  )
}

export default CountryListOfCards
