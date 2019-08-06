import { FieldValue, firestore } from 'firebase-config'
import { RecipeState } from './types'
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
    if (!url) {
      return
    }

    const recipeRef = firestore.collection('recipes')

    // Check if the recipe exists
    const snapshot = await recipeRef.where('url', '==', url).get()

    let docRef: firebase.firestore.DocumentReference

    // If the recipe does not exist, create it
    if (snapshot.size === 0) {
      const recipe = await fetch(`${config.api.url}?q=${url}`).then(res =>
        res.json()
      )
      docRef = await recipeRef.add({ ...recipe, users: [] })
    } else {
      docRef = snapshot.docs[0].ref
    }

    // Add the user id to the recipes user array
    if (user && docRef) {
      docRef.update({ users: FieldValue.arrayUnion(user.uid) })
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
