// 1. Створити клас Людина.

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.logHuman = () => console.log(this.name, this.age);
}
const human = new Person("Pasha", 27);
human.logHuman();
// 2. Створити клас Автомобіль.
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у
// відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина
// для виведення інформації про власника

class Car {
  constructor(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
  }

  setOwner(owner) {
    if (owner.age > 18) {
      this.owner = owner;
    } else {
      console.log("error");
    }
  }

  displayInfo() {
    console.log(this.brand, this.model, this.year, this.number);
    this.owner.logHuman();
  }
}

let car = new Car("tesla", "x", "2015", "2233");
let owner = new Person("Bob", "17");
let owner1 = new Person("Bred", "27");

car.setOwner(owner);
car.setOwner(owner1);
car.displayInfo();

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.
