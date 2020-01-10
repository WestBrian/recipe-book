import { Protein } from './helpers'

export interface Meta {
  yield: number
  prepTime: number
  cookTime: number
  totalTime: number
}

export interface Ingredient {
  measurement: string
  name: string
}

export interface Recipe {
  id: string
  title: string
  description: string
  pictureUrl: string
  ingredients: Ingredient[]
  directions: string[]
  meta: Meta
  protein?: Protein
}

export interface RecipeState {
  recipes: Recipe[]
  addRecipe(url: string): void
}
