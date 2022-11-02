const CountryDetails = ({ country }) => {
  const { commonName, officialName, capital, region, languages, map, population, timeZones, flag } = country
  return (
    <div className='flex justify-around flex-wrap w-full '>
      <div className='w-1/4 flex flex-col gap-y-3'>
        <p className='text-3xl'>Common Name: {commonName}</p>
        <p className='text-3xl'>Official Name: {officialName}</p>
        <p className='text-3xl'>Capital: {capital.name[0]}</p>
        <p className='text-3xl'>Region: {region}</p>
        <p className='text-3xl'>Languages: {Object.values(languages).map(language => <span key={language}>{language}  </span>)}</p>
        <p className='text-3xl'>Map: <a className='text-red-500' href={map} target='_blank' rel='noreferrer'>{map}</a></p>
        <p className='text-3xl'>Population: {population}</p>
        <p className='text-3xl'>Time Zones: {timeZones.map(timeZone => <span key={timeZone}>{timeZone} </span>)}</p>
      </div>
      <div className='w-2/4 min-w-max flex justify-center items-center'>
        <img className='w-3/4 h-s3/4 object-contain rounded-lg' src={flag} alt={commonName} />
      </div>
    </div>
  )
}

export default CountryDetails
