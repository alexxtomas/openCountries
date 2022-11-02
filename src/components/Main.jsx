import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/404'
import About from '../pages/About'
import Country from '../pages/Country'
import Home from '../pages/Home'
import Search from '../pages/Search'
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='about' element={<About />} />
        <Route path='country/:name' element={<Country />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default Main
