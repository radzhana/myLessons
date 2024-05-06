
      let users = {
        admin: "root",
        user: "123",
      };
      let login = prompt("Введите логин");
      let pass = prompt("Введите пароль");
      if (
        (login === "admin" && pass === "root") ||
        (login === "user" && pass === "123")
      ) {
        alert("Вы вошли");
      } else if (login === "admin" || login === "user") {
        alert("Неверный пароль");
      } else {
        alert("Такого пользователя не существует");
      }
