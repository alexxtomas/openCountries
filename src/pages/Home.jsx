import CuriousFactsCountries from '../components/CuriousFactsCountries'
import Title from '../components/Title'

const Home = () => {
  return (
    <section className='text-white body-font bg-slate-900 min-h-screen'>
      <div className='container px-5 py-16 mx-auto'>
        <Title text='Search info about all countries aroud the world for free.' />
        <CuriousFactsCountries />
      </div>
    </section>
  )
}

export default Home
