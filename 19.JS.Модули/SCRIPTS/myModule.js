function min_value(a, b) {
  if (a < b) {
    return `Мешньшее число это ${a}`;
  } else {
    return `Мешньшее число это ${b}`;
  }
}

let a = Math.floor(Math.random() * 10);
console.log(`Ваше первое рандомное число: ${a}`);
let b = Math.floor(Math.random() * 10);
console.log(`Ваше второе рандомное число: ${b}`);
console.log(min_value(a, b));

let menu = [
  {
    name: "ПИЦЦА ГАВАЙСКАЯ",
    ingredients: [
      "тесто",
      "ветчина",
      "куриная грудка",
      "ананас консервированный",
      "моцарелла",
      "соус",
    ],
    weight: 750,
    size: 35,
    cookingTime: 20,
    price: 880,
    netCost: 175,
  },
  {
    name: "РОЛЛ ФИЛАДЕЛЬФИЯ",
    ingredients: ["нори", "рис", "лосось", "огурец", "сыр"],
    weight: 280,
    quantity: 8,
    cookingTime: 20,
    price: 780,
    netCost: 145,
  },
  {
    name: "ЧИКЕНБУРГЕР",
    ingredients: [
      "булочка Бриошь",
      "котлета стрипс куриная",
      "сыр чеддер",
      "лист салата",
      "помидор",
      "маринованные огурцы",
      "соус коктейльный",
    ],
    weight: 370,
    cookingTime: 20,
    price: 715,
    netCost: 125,
  },
  {
    name: "ТОМ ЯМ",
    ingredients: [
      "рисовая лапша",
      "креветка",
      "шампиньоны",
      "помидоры черри",
      "лимон",
    ],
    weight: 350,
    cookingTime: 20,
    price: 900,
    netCost: 125,
  },
];

let ingredients = [
  "тесто",
  "ветчина",
  "куриная грудка",
  "ананас консервированный",
  "моцарелла",
  "соус",
  "нори",
  "рис",
  "лосось",
  "огурец",
  "сыр",
  "булочка Бриошь",
  "котлета стрипс куриная",
  "сыр чеддер",
  "лист салата",
  "маринованные огурцы",
  "соус коктейльный",
  "рисовая лапша",
  "креветка",
  "шампиньоны",
  "помидоры черри",
  "лимон",
];
let ingredientsPrice = {
  тесто: 70,
  ветчина: 150,
  "куриная грудка": 200,
  "ананас консервированный": 100,
  моцарелла: 100,
  соус: 45,
  нори: 70,
  рис: 100,
  лосось: 250,
  огурец: 50,
  сыр: 180,
  "булочка Бриошь": 40,
  "котлета стрипс куриная": 90,
  "сыр чеддер": 200,
  "лист салата": 70,
  помидор: 40,
  "маринованные огурцы": 90,
  "соус коктейльный": 50,
  "рисовая лапша": 80,
  креветка: 250,
  шампиньоны: 140,
  "помидоры черри": 140,
  лимон: 50,
};

let menuText = "";
for (let i = 0; i < menu.length; i++) {
  let dish = menu[i];
  let totalProfit = 0;
  let dishExpenses = 0;

  for (let f = 0; f < dish.ingredients.length; f++) {
    let ingredient = dish.ingredients[f];
    dishExpenses += ingredientsPrice[ingredient];
  }
  totalProfit = dish.price - dishExpenses;
  menu[i].profit = totalProfit;
  let text = `Название: \n${
    dish.name
  }. \nСостав: \n-${dish.ingredients.join("\n-")} \nЦена: ${
    dish.price
  } руб.`;
  console.log("---------------------------------------");
  console.log(text);
  menuText = menuText + "\n" + text;
}

function calculateCookingCost(ingredients) {
  let cookingCost = 0;
  for (let i = 0; i < ingredients.length; i++) {
    let ingredient = ingredients[i];
    cookingCost += ingredientsPrice[ingredient] || 0;
  }
  return cookingCost;
}

menu.forEach((dish) => {
  let cookingCost = calculateCookingCost(dish.ingredients);
  let profit = dish.price - cookingCost;
  dish.profit = profit;
  console.log(`Доход от блюда ${dish.name}: ${profit}`);
});
console.log(menu);