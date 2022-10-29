// Створити об'єкт, та при його створенні відразу зробити декілька властивостей(свойств)

// Назовіть об'єкт з назвою store.

// При створенні зробіть відразу властивості nameі запишіть у нього назву свого уявного магазину.

// Також створіть властивість address, який буде об'єктом і
// там запишіть властивості country, city, street, houseNumber з адресою вашого уявного магазину.

// Потім створіть окремо(тобто не при ініціалізації,
//   а нижче(ініацілізація це процес сворення та коли ми відразу туди сетемо якісь властивості)) властивість clients,
//    і значенням буде пустий об'єкт.

// Потім до clients зробіть 5 властивостей, які будуть називатися іменами і
// прізвищами 5 рандомних учасників нашого курсу(мене також можно) і
// у кожного має бути значення з кількіст'ю покупок(quantity) та кількість бонусів(bonuses). Ці значення будуть числами

let store = {
  name: "Beautiful",
  adress: {
    country: "Ukraine",
    city: "Odessa",
    street: "Balkivska",
    houseNumber: 30,
  },
};
store.clients = {};
store.clients["Irina Mararova"] = {
  quantity: 10,
  bonuses: 10,
};
store.clients["Mikhall Hitko"] = {
  quantity: 10,
  bonuses: 10,
};
store.clients["Oleksandra Horbenko"] = {
  quantity: 10,
  bonuses: 10,
};
store.clients["Olena Demchuk"] = {
  quantity: 10,
  bonuses: 10,
};
store.clients["Pavlo Fedorenko"] = {
  quantity: 10,
  bonuses: 10,
};
