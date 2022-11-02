import Paragraph from '../components/Paragraph'
import RandomData from '../components/RandomData'
import Top10 from '../components/Top10'

const Home = () => {
  return (
    <section className='flex  flex-col items-center gap-20 mt-14  '>
      <div className=''>
        <Paragraph className='text-5xl' text='Search info about all countries aroud the world for free.' />
      </div>
      <div className='flex  items-center justify-evenly h-2/4 w-full '>
        <div className=' flex-col items-center w-full h-full text-center '>
          <Top10 which='mostPopulous' />
        </div>
        <div className='flex-col items-center w-full h-full text-center '>
          <Top10 which='smallest' />
        </div>
      </div>
      <div className='h-20 mb-10 '>
        <RandomData />
      </div>
    </section>

  )
}

export default Home
