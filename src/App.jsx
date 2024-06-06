import { useState } from 'react'
import './App.css'
import Cooks from './components/Cooks/Cooks'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CurrentlyCooking from './components/CurrentlyCooking/CurrentlyCooking'

function App() {
  const [cooks, setCooks] = useState([]);

  const handleAddToCooks = (recipe) => {
    if (cooks.find(cook => cook.recipe_id === recipe.recipe_id)) {
      toast.error('This recipe is already added to the cook section!');
      return;
    }
    const newCooks = [...cooks, recipe];
    setCooks(newCooks);
  }

  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handleAddToCurrentlyCooking = (recipe) => {

    // Remove the recipe from cooks
    const newCooks = cooks.filter(cook => cook.recipe_id !== recipe.recipe_id);
    setCooks(newCooks);
    // Add the recipe to cooking
    const newCurrentlyCooking = [...currentlyCooking, recipe];
    setCurrentlyCooking(newCurrentlyCooking);
  }

  return (
    <>
      <Header></Header>
      <OurRecipes></OurRecipes>
      <div className='container mx-auto flex gap-6'>
        <Recipes handleAddToCooks={handleAddToCooks}></Recipes>
        <div className='w-2/5'>
          <Cooks cooks={cooks} handleAddToCurrentlyCooking={handleAddToCurrentlyCooking}></Cooks>
          <CurrentlyCooking currentlyCooking={currentlyCooking}></CurrentlyCooking>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
