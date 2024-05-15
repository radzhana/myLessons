function min_value(a, b) {
    if (a < b) {
      return `Мешньшее число это ${a}`;
    } else {
      return `Мешньшее число это ${b}`;
    }
  }




  function calculateCookingCost(ingredients) {
    let cookingCost = 0;
    for (let i = 0; i < ingredients.length; i++) {
      let ingredient = ingredients[i];
      cookingCost += ingredientsPrice[ingredient] || 0;
    }
    return cookingCost;
  }

//экспорт 
  export {min_value, calculateCookingCost};