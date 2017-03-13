import { Injectable } from '@angular/core';

import { Recipe } from './recipe'
import { Ingredient} from '../shared/ingredient';


@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
      new Recipe('Schnitzel', 'Very tasty', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/1280px-Wiener-Schnitzel02.jpg', [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1)
      ]),
      new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
    ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
