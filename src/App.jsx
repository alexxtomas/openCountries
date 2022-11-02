import Header from './components/Header'
import Main from './components/Main'
import { CountriesProvider } from './context/CountriesContext'

const App = () =>
  <>
    <Header />
    <CountriesProvider>
      <Main />
    </CountriesProvider>
  </>

export default App
