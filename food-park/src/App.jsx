import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <div className="bg-white h-full p-5 font-poppins">
      <Header></Header>
      <Hero></Hero>
      <Recipes></Recipes>

    </div>
  )
}

export default App
