
    let pizza ={
        name: 'гавайская',
        ingredients: ['тесто', 'ветчина', 'куриная грудка', 'ананас консервированный', 'моцарелла', 'соус'],
        weight: 750,
        size: 35,
        cookingTime: 20,
        price: 580,
        netCost: 175
        };
    let rolls ={
        name: 'филадельфия',
        ingredients: ['нори', 'рис', 'лосось', 'огурец', 'сыр'],
        weight: 280,
        quantity: 8,
        cookingTime: 20,
        price: 480,
        netCost: 145
        }; 
    let burger ={
        name: 'чикенбургер',
        ingredients: ['булочка Бриошь', 'котлета стрипс куриная', 'сыр чеддер', 'лист салата', 'помидор', 'маринованные огурцы', 'соус Коктейльный'],
        weight: 370,
        cookingTime: 20,
        price: 415,
        netCost: 125
        };
    let soup ={
        name: 'том ям',
        ingredients: ['рисовая лапша', 'креветка,', 'шампиньоны', 'помидоры черри', 'лимон'],
        weight: 350,
        cookingTime: 20,
        price: 410,
        netCost: 125
        }
    let menu = [pizza, rolls, burger, soup];
    menu.shift();//удалён объект
    menu.unshift(pizza)//возвращен объект обратно
    delete soup.ingredients[0];//удалена рисовая лапша из том яма
    console.log(pizza.cookingTime+rolls.cookingTime+burger.cookingTime+soup.cookingTime);//общее время приготовления
    console.log(pizza.price+rolls.price+burger.price+soup.price);//полученные деньги от продажи длюд
    menu = [menu.pop()];//удалены все объекты, кроме одного
    console.log(pizza.price-pizza.netCost);//прибыль от продажи пиццы
    console.log(rolls.price-rolls.netCost);//прибыль от продажи роллов
    console.log(burger.price-burger.netCost);//прибыль от продажи бургера
    console.log(soup.price-soup.netCost);//прибыль от продажи супа
