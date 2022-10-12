let sportsman = "";
let capital = "";
let year = prompt("В каком году вы родились?");
let age = 2022 - year;

if (year == null) {
  alert("Жаль что вы не захотели указать свой возраст...");
  age = "неизвестно сколько";
}
let city = prompt("В каком городе вы живете?");
if (city == null) {
  alert("Жаль что вы не захотели указать свой город...");
  capital = "неизвестно какой страны";
  city = capital;
}
let sport = prompt("Ваш любимый вид спорта?");

if (sport == null) {
  alert("Жаль что вы не захотели указать свой любимый вид спорта...");
  sportsman = "неизвестно кем";
}
if (city == "киев" || city == "Киев") {
  capital = "Ты живешь в столице Украины";
} else if (city == "вашингтон" || city == "Вашингтон") {
  capital = "Ты живешь в столице США";
} else if (city == "лондон" || city == "Лондон") {
  capital = "Ты живешь в столице Британии";
} else {
  capital = "Ты живешь в городе - " + city;
}

if (sport == "баскетбол" || sport == "Баскетбол") {
  sportsman = "Майкл Джорданом?";
} else if (sport == "футбол" || sport == "Футбол") {
  sportsman = "Девидом Бекхемом";
} else if (sport == "бокс" || sport == "Бокс") {
  sportsman = "Виталием Кличко?";
}
alert(
  "Тебе - " +
    age +
    " лет" +
    "\n" +
    capital +
    "\n" +
    "Круто! Ты хочешь стать " +
    sportsman
);
