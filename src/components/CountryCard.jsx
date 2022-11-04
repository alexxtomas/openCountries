import { useNavigate } from 'react-router-dom'

const CountryCard = ({ name, flag }) => {
  const navigate = useNavigate()
  return (
    <figure onClick={() => navigate(`/country/${name}`)} key={name} className='cursor-pointer'>
      <img alt={`${name} flag`} src={flag} className='w-96 h-56 object-fill rounded-lg' />
      <figcaption className='text-center text-2x1 font-bold tracking-tight'>{name}</figcaption>
    </figure>
  )
}

export default CountryCard
