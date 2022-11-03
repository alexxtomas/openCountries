import RandomFact from '../components/RandomData'
import Title from '../components/Title'
import Top10 from '../components/Top10'
import { randomNumber } from '../utils/randomNumber'

const Home = () => {
  return (
    <section className='text-white body-font bg-slate-900 min-h-screen'>
      <div className='container px-5 py-16 mx-auto'>
        <div className='flex flex-col text-center w-full mb-4 sm:mb-20'>
          <Title className='font-black tracking-wide text-4xl spacing title-font mb-4 ' text='Search info about all countries aroud the world for free.' />
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className='xl:w-2/4 lg:w-1/2 md:w-full px-8 py-6 mx-auto   text-center'>
            <Top10 which={randomNumber(2)} />
          </div>
          <div className='xl:w-2/4 lg:w-1/2 md:w-full px-8 py-6 justify-center my-auto mx-0   text-center'>
            <RandomFact />
            <button className='flex mx-auto mt-6 bg-slate-50 border-0 py-2 px-8 transition-all shadow-yellow-200 shadow-md focus:outline-none hover:bg-yellow-100 rounded-full text-lg'>💡</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
