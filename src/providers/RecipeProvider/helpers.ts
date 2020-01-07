import { Recipe } from 'providers/RecipeProvider/types'

export type Protein = 'steak' | 'beef' | 'pork' | 'chicken' | 'turkey' | 'tofu'
const proteins: Protein[] = [
  'steak',
  'beef',
  'pork',
  'chicken',
  'turkey',
  'tofu',
]

export const determineProtein = (recipe: Recipe) => {
  return proteins.find(protein => {
    return !!recipe.ingredients.find(ingredient =>
      ingredient.name.toLowerCase().includes(protein)
    )
  })
}
