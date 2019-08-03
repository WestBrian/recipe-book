export type SupportedHostname = "damndelicious.net";

export type Scraper = (html: string) => Partial<Recipe>;

export interface Meta {
  yield: number;
  prepTime: number;
  cookTime: number;
  totalTime: number;
}

export interface Ingredient {
  measurement: string;
  name: string;
}

export interface Recipe {
  title: string;
  description: string;
  pictureUrl: string;
  ingredients: Ingredient[];
  directions: string[];
  meta: Meta;
}
