const phonesArr = [
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/284913535.jpg",
    brand: "Iphone",
    price: 35000,
    description:
      'Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 16',
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/263965150.jpg",
    brand: "Samsung",
    price: 12000,
    description:
      'Экран (6.4", Super AMOLED, 2400x1080)/ Samsung Exynos 1280 (2 x 2.4 ГГц + 6 x 2.0 ГГц)/ основная квадро-камера: 48 Мп + 8 Мп + 5 Мп + 2 Мп, фронтальная камера: 13 Мп/ RAM 6 ГБ/ 128 ГБ встроенной памяти + microSD (до 1 ТБ)/ 3G/ LTE/ GPS/ A-GPS/ ГЛОНАСС/ BDS / поддержка 2х SIM-карт (Nano-SIM)/ Android 12 / 5000 мА*ч',
  },
  {
    img: "https://content.rozetka.com.ua/goods/images/big/282291420.jpg",
    brand: "Motorola",
    price: 70000,
    description:
      'Экран (6.5", LCD, 2400x1080) / Qualcomm Snapdragon 680 (2.4 ГГц) / основная тройная камера: 50 Мп + 8 Мп + 2 Мп, фронтальная камера: 16 Мп / RAM 6 ГБ / 128 ГБ встроенной памяти + microSD (до 1 ТБ) / 3G / LTE / GPS / поддержка 2х SIM-карт (Nano-SIM) / Android 12 / 5000 мА*ч',
  },
];
const tabletsArr = [
  {
    img: "https://content2.rozetka.com.ua/goods/images/big/21152011.jpg",
    brand: "Lenovo",
    price: 7000,
    description:
      'Экран 10.3" IPS (1920x1200) емкостный MultiTouch / MediaTek Helio P22T (2.3 ГГц) / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD / Wi-Fi / Bluetooth 5.0 / основная камера 8 Мп, фронтальная - 5 Мп / GPS / ГЛОНАСС / Android 10 / 460 г / серый',
  },
  {
    img: "https://content.rozetka.com.ua/goods/images/big/224010066.jpg",
    brand: "Apple",
    price: 17000,
    description:
      'Экран 10.2" IPS (2160x1620) MultiTouch / Apple A13 Bionic (2.65 ГГц) / 64 ГБ встроенной памяти / Wi-Fi / Bluetooth 4.2 / основная камера 8 Мп, фронтальная - 12 Мп / iPadOS 15 / 487 г / серебристый',
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/186993783.jpg",
    brand: "Samsung",
    price: 7000,
    description:
      'Экран 8.7" (1340x800) MultiTouch / MediaTek Helio P22T (2.3 ГГц) / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD / 3G / 4G / Wi-Fi / Bluetooth 5.0 / основная камера 8 Мп, фронтальная - 2 Мп / GPS / ГЛОНАСС / Android 11 / 371 г / серый',
  },
];
const laptopsArr = [
  {
    img: "https://content2.rozetka.com.ua/goods/images/big/175333147.jpg",
    brand: "Acer",
    price: 31000,
    description:
      'Экран 15.6" IPS (1920x1080) Full HD, матовый / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / черный',
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/302686477.jpg",
    brand: "Asus",
    price: 36000,
    description:
      'Экран 15.6" IPS (1920x1080) Full HD 144 Гц, матовый / AMD Ryzen 5 4600H (3.0 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.3 кг / черный',
  },
  {
    img: "https://content.rozetka.com.ua/goods/images/big/280562759.jpg",
    brand: "Lenovo",
    price: 25000,
    description:
      'Экран 15.6" IPS (1920x1080) Full HD, матовый / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / AMD Radeon Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.65 кг / серый',
  },
];
const computersArr = [
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/317212965.jpg",
    brand: "Artline",
    price: 28000,
    description:
      "AMD Ryzen 5 3600 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / nVidia GeForce RTX 3050, 8 ГБ / без ОД / LAN / без ОС",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/319739027.jpg",
    brand: "HP",
    price: 35000,
    description:
      "Intel Core i5-10500T (2.3 - 3.8 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 1660 Ti, 6 ГБ / DVD+/-RW / LAN / Wi-Fi / Bluetooth / Windows 10 Pro 64bit / клавиатура + мышь",
  },
  {
    img: "https://content.rozetka.com.ua/goods/images/big/173874908.jpg",
    brand: "iMac",
    price: 78000,
    description:
      'Экран 23.5" (4480x2520) 4.5K / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics (8 ядер) / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / macOS Big Sur / 4.48 кг / серебристый / клавиатура + мышь',
  },
];
const upsArr = [
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/197206681.jpg",
    brand: "APC",
    price: 6000,
    description: "Количество розеток 2 х Schuko Выходная мощность 480 Вт",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/305826627.jpg",
    brand: "TECN",
    price: 3000,
    description: `Количество розеток
2 х Schuko
Выходная мощность
560 Вт`,
  },
  {
    img: "https://content2.rozetka.com.ua/goods/images/big/303561043.jpg",
    brand: "Armac",
    price: 3000,
    description: `Количество розеток
2 x Schuko
Выходная мощность
480 Вт`,
  },
];
const category = document.querySelectorAll(".category-box button");
const goodBox = document.querySelector(".good-box");
const goodInfo = document.querySelector(".good-info");

const renderGoods = (arr) => {
  goodBox.innerHTML = "";
  arr.forEach((item) => {
    const div = document.createElement("div");
    goodBox.append(div);
    const img = document.createElement("img");
    div.append(img);
    img.src = item.img;
    const title = document.createElement("h3");
    div.append(title);
    title.innerText = item.brand;
    const price = document.createElement("p");
    div.append(price);
    price.innerText = item.price;
    div.addEventListener("click", () => {
      goodInfo.innerHTML = "";
      goodInfo.classList.remove("none");
      const title = document.createElement("h3");
      goodInfo.append(title);
      title.innerText = item.brand;
      const img = document.createElement("img");
      goodInfo.append(img);
      img.src = item.img;
      const price = document.createElement("p");
      goodInfo.append(price);
      price.innerText = item.price;
      const p = document.createElement("p");
      goodInfo.append(p);
      p.innerText = item.description;
      const byuBtn = document.createElement("button");
      byuBtn.type = "button";
      byuBtn.innerText = "Купить";
      goodInfo.append(byuBtn);
      byuBtn.addEventListener("click", () => {
        alert("Покупка завершена");
        goodBox.classList.add("none");
        goodInfo.classList.add("none");
      });
    });
  });
};

category.forEach((item) => {
  item.addEventListener("click", () => {
    goodBox.classList.remove("none");
    goodInfo.classList.add("none");
    if (item.dataset.selector === "phones") {
      renderGoods(phonesArr);
    } else if (item.dataset.selector === "tablets") {
      renderGoods(tabletsArr);
    } else if (item.dataset.selector === "laptops") {
      renderGoods(laptopsArr);
    } else if (item.dataset.selector === "computers") {
      renderGoods(computersArr);
    } else if (item.dataset.selector === "ups") {
      renderGoods(upsArr);
    }
  });
});
