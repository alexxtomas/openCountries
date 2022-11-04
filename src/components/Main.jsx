import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from './Loading'

const Main = () => {
  const Search = lazy(
    () => import('../pages/Search')
  )

  const Home = lazy(
    () => import('../pages/Home')
  )

  const Country = lazy(
    () => import('../pages/Country')
  )

  const About = lazy(
    () => import('../pages/About')
  )

  const NotFound = lazy(
    () => import('../pages/404')
  )
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='about' element={<About />} />
          <Route path='country/:name' element={<Country />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default Main
