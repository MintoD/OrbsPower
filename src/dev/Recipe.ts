/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

namespace Manager {
    export interface Recipe {
        item: ItemInstance;
        mask: string[];
        data: (string | number)[];
    }

    export class RecipesManager {
        static addRecipe(recipe: Recipe) {
            Recipes.addShaped(recipe.item, recipe.mask, recipe.data);
        }
    }
}
