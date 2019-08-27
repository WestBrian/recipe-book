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
  protein?: string
}

export interface RecipeState {
  recipes: Recipe[]
  addRecipe(url: string): void
}
