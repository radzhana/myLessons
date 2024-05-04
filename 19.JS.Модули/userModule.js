//файл userModule.js

      function cookingCost(ingredients) {
        let cookingCost = 0;
        for (let i = 0; i < ingredients.length; i++) {
          let ingredient = ingredients[i];
          cookingCost += ingredient[ingredient] || 0;
        }
        return cookingCost;
      }
export {
  cookingCost
}