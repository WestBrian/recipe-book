import { Recipe } from 'providers/RecipeProvider/types'
import { User } from 'providers/AuthProvider/types'
import { firestore } from 'firebase-config'
import { useEffect, useState } from 'react'

const forEach = async (
  snapshot: firebase.firestore.QuerySnapshot,
  callback: (doc: firebase.firestore.QueryDocumentSnapshot) => void
) => {
  snapshot.forEach(callback)
}

export const useRecipesState = (user?: User) => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    if (user) {
      console.log('watching user recipes')
      firestore
        .collection('users')
        .doc(user.uid)
        .collection('recipes')
        .onSnapshot(async snapshot => {
          const newRecipes: Recipe[] = []
          await forEach(snapshot, async doc => {
            const recipe = (await doc.data()) as Recipe
            newRecipes.push({ id: doc.id, ...recipe })
          })
          setRecipes(newRecipes)
        })
    }
  }, [user])

  return { recipes }
}
