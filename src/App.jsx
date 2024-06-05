import './App.css'
import Cooks from './components/Cooks/Cooks'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <>
      <Header></Header>
      <OurRecipes></OurRecipes>
      <div className='container mx-auto flex gap-6'>
        <Recipes></Recipes>
        <Cooks></Cooks>
      </div>
    </>
  )
}

export default App
