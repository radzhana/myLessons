import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
function App() {
  const [cart, setCart] = useState([]);
  const cartSum = cart.reduce((acc, item) => acc + item.price, 0);
  const menu = [
    {
      name: "Пицца Гавайская",
      weight: 750,
      size: 35,
      cookingTime: 20,
      price: 580,
      image:
        "https://petelinka.ru/storage/images/recipe/origin/1591154099_49184.jpg",
    },
    {
      name: "Роллы Филадельфия",
      weight: 280,
      cookingTime: 20,
      price: 480,
      image: "https://dostavka-delmario.ru/i/goods/filadelfiya-gril.jpg",
    },
    {
      name: "Чикенбургер",
      weight: 370,
      cookingTime: 20,
      price: 415,
      image:
        "https://burgerudachi.ru/wp-content/uploads/Burger-CHikenburger-Chickenburger.jpg",
    },
    {
      name: "Том Ям",
      weight: 350,
      cookingTime: 20,
      price: 410,
      image: "https://www.patee.ru/r/x6/19/7a/dc/640m.jpg",
    },
  ];

  return (
    <div className="App">
      <div>
        <h2>Корзина:</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item) => (
                <li>
                  {item.name} - {item.price} руб
                </li>
              ))}
            </ul>
            <div>Итого: {cartSum} руб</div>
          </>
        ) : (
          <div>В корзине ничего нет</div>
        )}
      </div>
      <h1>"Восточная Сказка"</h1>
      <div className="menu">
        {menu.map(function (item) {
          return (
            <div className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <div>Цена: {item.price} руб</div>
              <button
                style={{
                  width: "40%",
                  padding: "10px",
                  borderRadius: "12px",
                  
                }}
                onClick={() => {
                  setCart([...cart, item]);
                }}
              >
                В корзину
              </button>
            </div>
          );
        })}
      </div>
      <Button
        text="Оформить заказ"
        style={{
          backgroundColor: "grey",
          borderRadius: 12,
          fontSize: 20,
          width: 250,
          marginRight: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <Button
        text="Корзина"
        style={{
          backgroundColor: "green",
          borderRadius: 12,
          fontSize: 20,
          width: 250,
        }}
      />
    </div>
  );
}

export default App;
