
import './App.scss'
import { BestArtists } from './components/BestArtists'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Info } from './components/Info'
import { Samples } from './components/Samples'

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <Gallery />
        <Info />
        <Samples />
        <BestArtists />
      </div>
    </>
  )
}

export default App
