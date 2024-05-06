//Определение функции
function calculateCookingCost(ingredients) {
  let cookingCost = 0;
  for (let i = 0; i < ingredients; i++) {
    let ingredient = ingredients[i];
    cookingCost += ingredientsPrice[ingredient] || 0;
  }
  return cookingCost;
}
//Экспорт функции
export {calculateCookingCost}
