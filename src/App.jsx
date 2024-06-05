import { useState } from 'react'
import './App.css'
import Cooks from './components/Cooks/Cooks'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'

function App() {
  const [cooks, setCooks] = useState([]);

  const handleAddToCooks = (recipe) => {
    const newCooks = { ...cooks, recipe }
    setCooks(newCooks);
  }

  return (
    <>
      <Header></Header>
      <OurRecipes></OurRecipes>
      <div className='container mx-auto flex gap-6'>
        <Recipes handleAddToCooks={handleAddToCooks}></Recipes>
        <Cooks cooks={cooks}></Cooks>
      </div>
    </>
  )
}

export default App
