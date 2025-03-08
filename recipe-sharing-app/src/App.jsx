import { useState } from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { useRecipeStore } from './recipeStore';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddRecipeForm/>
    <RecipeList/>
    
     
    </>
  )
}

export default App
