import { RecipeState } from './types'
import { determineProtein } from './helpers'
import { firestore } from 'firebase-config'
import { useAuth } from 'providers/AuthProvider'
import { useRecipesState } from 'hooks/useRecipesState'
import React, { FC, createContext, useContext } from 'react'
import config from 'config.json'

const RecipeContext = createContext<RecipeState>({
  recipes: [],
  addRecipe: () => {},
})

const RecipeProvider: FC = ({ children }) => {
  const { user } = useAuth()
  const { recipes } = useRecipesState(user)

  const addRecipe = async (url: string) => {
    if (!url || !user) {
      return
    }

    const recipeRef = firestore
      .collection('users')
      .doc(user.uid)
      .collection('recipes')

    // Check if the recipe exists
    const snapshot = await recipeRef.where('url', '==', url).get()

    // If the recipe does not exist, create it
    if (snapshot.size === 0) {
      const recipe = await fetch(`${config.api.url}?q=${url}`).then(res =>
        res.json()
      )
      const protein = determineProtein(recipe) || null
      await recipeRef.add({ ...recipe, protein })
    }
  }

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  )
}

export const useRecipes = () => useContext(RecipeContext)

export default RecipeProvider
