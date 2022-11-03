import { Link } from 'react-router-dom'

const CountryLink = ({ name, flag, reverse = false }) => {
  if (reverse) {
    return (
      <Link className='cursor-pointer p-2 pb-2 hover:text-red-400 transition-all duration-700' to={`/country/${name}`}>
        <span className='  text-center'>{name}</span>
        <img className='w-9 h-6 inline ml-4 object-fill' src={flag} alt={name} />
      </Link>
    )
  }
  return (
    <Link className='cursor-pointer p-2 pb-2 hover:text-red-400 transition-all duration-700' to={`/country/${name}`}>
      <img className='w-9 h-6 inline   object-fill' src={flag} alt={name} />
      <span className='pl-2   text-center'>{name}</span>
    </Link>
  )
}

export default CountryLink
