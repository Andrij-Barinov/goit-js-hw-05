// ❗ ЗАДАЧА #1

// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].

// ТЕСТЫ

// ✅ Объявлена переменная apartment
// ✅ Значение переменной apartment это объект
// ✅ В объекте есть свойство imgUrl
// ✅ Значение свойства imgUrl это строка "https://via.placeholder.com/640x480"
// ✅ В объекте есть свойство descr
// ✅ Значение свойства descr это строка "Spacious apartment in the city center"
// ✅ В объекте есть свойство rating
// ✅ Значение свойства rating это число 4
// ✅ В объекте есть свойство price
// ✅ Значение свойства price это число 2153
// ✅ В объекте есть свойство tags
// ✅ Значение свойства tags это массив ["premium", "promoted", "top"]


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"]
// };
// console.log(apartment);



// ❗ ЗАДАЧА #2

// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

// ТЕСТЫ

// ✅ Объявлена переменная apartment
// ✅ Значение переменной apartment это объект
// ✅ У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
// ✅ В объекте apartment есть свойство owner
// ✅ Значение свойства owner это объект
// ✅ В объекте owner есть свойство name
// ✅ Значение свойства name это "Henry"
// ✅ В объекте owner есть свойство phone
// ✅ Значение свойства phone это "982-126-1588"
// ✅ В объекте owner есть свойствао email
// ✅ Значение свойства email это "henry.carter@aptmail.com"


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com"
//   },
// };
// console.log(apartment);



// ❗ ЗАДАЧА #3

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// ТЕСТЫ

// ✅ Объявлена переменная apartment
// ✅ Значение переменной apartment это объект
// ✅ У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
// ✅ Объявлена переменная aptRating
// ✅ Значение переменной aptRating это число 4
// ✅ Объявлена переменная aptDescr
// ✅ Значение переменной aptDescr это строка "Spacious apartment in the city center"
// ✅ Объявлена переменная aptPrice
// ✅ Значение переменной aptPrice это число 2153
// ✅ Объявлена переменная aptTags
// ✅ Значение переменной aptTags это массив строк ["premium", "promoted", "top"]


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(apartment);



// ❗ ЗАДАЧА #4

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// ТЕСТЫ

// ✅ Объявлена переменная apartment с помощью const
// ✅ Значение переменной apartment это объект
// ✅ Объявлена переменная ownerName с помощью const
// ✅ Значение переменной ownerName это строка "Henry"
// ✅ Объявлена переменная ownerPhone с помощью const
// ✅ Значение переменной ownerPhone это "982-126-1588"
// ✅ Объявлена переменная ownerEmail с помощью const
// ✅ Значение переменной ownerEmail это "henry.carter@aptmail.com"
// ✅ Объявлена переменная numberOfTags с помощью const
// ✅ Значение переменной numberOfTags это 3
// ✅ Объявлена переменная firstTag с помощью const
// ✅ Значение переменной firstTag это "premium"
// ✅ Объявлена переменная lastTag с помощью const
// ✅ Значение переменной lastTag это "top"


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(apartment);
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);



// ❗ ЗАДАЧА #5

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// ТЕСТЫ

// ✅ Объявлена переменная apartment
// ✅ Значение переменной apartment это объект
// ✅ Объявлена переменная aptRating
// ✅ Значение переменной aptRating это 4
// ✅ Объявлена переменная aptDescr
// ✅ Значение переменной aptDescr это "Spacious apartment in the city center"
// ✅ Объявлена переменная aptPrice
// ✅ Значение переменной aptPrice это 2153
// ✅ Объявлена переменная aptTags
// ✅ Значение переменной aptTags это ["premium", "promoted", "top"]


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// console.log(apartment);
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);



// ❗ ЗАДАЧА #6

// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

// ТЕСТЫ

// ✅ Объявлена переменная apartment
// ✅ Значение переменной apartment это объект
// ✅ Значение вложенного свойства price это число 5000
// ✅ Значение вложенного свойства rating это число 4.7
// ✅ Значение вложенного свойства name это строка "Henry Sibola"
// ✅ Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"]


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment);



// ❗ ЗАДАЧА #7

// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

// ТЕСТЫ

// ✅ Объявлена переменная apartment
// ✅ Значение переменной apartment это объект
// ✅ Значение вложенного свойства area это число 60
// ✅ Значение вложенного свойства rooms это число 3
// ✅ Значение вложенного свойства location это объект
// ✅ Значение вложенного свойства location.country это строка "Jamaica"
// ✅ Значение вложенного свойства location.city это строка "Kingston"


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country : "Jamaica",
//   city : "Kingston",
// };
// console.log(apartment);



// ❗ ЗАДАЧА #8

// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

// ТЕСТЫ

// ✅ Объявлена переменная product
// ✅ Значение переменной product это объект
// ✅ Значение вложенного свойства name это строка "Repair Droid"
// ✅ Значение вложенного свойства price это число 2500
// ✅ Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
// ✅ Значение вложенного свойства tags это массив ["on sale", "trending", "best buy"]


// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];
// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product);



// ❗ ЗАДАЧА #9

// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

// ТЕСТЫ

// ✅ Объявлена переменная credentials
// ✅ Значение переменной credentials это объект
// ✅ В объекте credentials есть свойство email
// ✅ Значение вложенного свойства email это строка "henry.carter@aptmail.com"
// ✅ В объекте credentials есть свойство password
// ✅ Значение вложенного свойства password это строка "jqueryismyjam"


// const emailInputName = "email";
// const passwordInputName = "password";
// const credentials = {
// [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam"
// };
// console.log(credentials);



// ❗ ЗАДАЧА #10

// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// ТЕСТЫ

// ✅ Объявлена переменная apartment
// ✅ Значение переменной apartment это объект
// ✅ Объявлена переменная keys
// ✅ Значение переменной keys это массив ["descr", "rating", "price"]
// ✅ Объявлена переменная values
// ✅ Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(apartment);
// console.log(keys);
// console.log(values);



// ❗ ЗАДАЧА #11

// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// ТЕСТЫ

// ✅ Объявлена переменная advert.
// ✅ Значение переменной advert это объект.
// ✅ Объявлена переменная apartment.
// ✅ Значение переменной apartment это объект.
// ✅ Объявлена переменная keys.
// ✅ Значение переменной keys это массив ["descr", "rating", "price"].
// ✅ Объявлена переменная values.
// ✅ Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].


// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
// for (const key in apartment) {
// if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(apartment);



// ❗ ЗАДАЧА #12

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// ТЕСТЫ

// ✅ Объявлена функция countProps(object)
// ✅ Вызов countProps({}) возвращает 0
// ✅ Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// ✅ Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// ✅ Функция подсчитывает только собственные свойства объекта


// function countProps(object) {
//   let propCount = 0;
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount++;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));



// ❗ ЗАДАЧА #13

// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// ТЕСТЫ

// ✅ Объявлена переменная apartment.
// ✅ Значение переменной apartment это объект.
// ✅ Объявлена переменная keys.
// ✅ Значение переменной keys это массив ["descr", "rating", "price"].
// ✅ Значение переменной keys получено с помощью метода Object.keys().
// ✅ Объявлена переменная values.
// ✅ Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// ✅ Значение переменной values получено с помощью цикла for...of.


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(apartment);
// console.log(keys);
// console.log(values);



// ❗ ЗАДАЧА #14

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

// ТЕСТЫ

// ✅ Объявлена функция countProps(object)
// ✅ Вызов countProps({}) возвращает 0
// ✅ Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// ✅ Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// ✅ Функция подсчитывает только собственные свойства объекта
// ✅ Функция использует метод Object.keys() и, возможно, цикл for...of


// function countProps(object) {
//  let propCount = 0;
//   for (const key of Object.keys(object)) {
//     propCount += 1;
//   }
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));



// ❗ ЗАДАЧА #15

// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// ТЕСТЫ

// ✅ Объявлена переменная apartment
// ✅ Значение переменной apartment это объект
// ✅ Объявлена переменная keys
// ✅ Значение переменной keys это массив ["descr", "rating", "price"]
// ✅ Объявлена переменная values
// ✅ Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
// ✅ Для получения массива ключей объекта apartment используется Object.keys()
// ✅ Для получения массива значений объекта apartment используется Object.values()


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(apartment);
// console.log(keys);
// console.log(values);



// ❗ ЗАДАЧА #16

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// ТЕСТЫ

// ✅ Объявлена функция countTotalSalary(salaries)
// ✅ Вызов countTotalSalary({}) возвращает 0
// ✅ Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// ✅ Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
// ✅ Функция учитывает только собственные свойства объекта


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
// for (const salary of Object.values(salaries)) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));



// ❗ ЗАДАЧА #17

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// ТЕСТЫ

// ✅ Объявлена переменная colors
// ✅ Значение переменной colors это массив
// ✅ Объявлена переменная hexColors
// ✅ Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// ✅ Объявлена переменная rgbColors
// ✅ Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(colors);
// console.log(hexColors);
// console.log(rgbColors);



// ❗ ЗАДАЧА #18

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// ТЕСТЫ

// ✅ Объявлена функция getProductPrice(productName).
// ✅ Вызов getProductPrice("Radar") возвращает 1300.
// ✅ Вызов getProductPrice("Grip") возвращает 1200.
// ✅ Вызов getProductPrice("Scanner") возвращает 2700.
// ✅ Вызов getProductPrice("Droid") возвращает 400.
// ✅ Вызов getProductPrice("Engine") возвращает null.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
// for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));



// ❗ ЗАДАЧА #19

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// ТЕСТЫ

// ✅ Объявлена функция getAllPropValues(propName)
// ✅ Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// ✅ Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// ✅ Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// ✅ Вызов getAllPropValues("category") возвращает []


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//  let propValues = [];
//     for (const product of products) {
//         if (propName in product) {
//             propValues.push(product[propName]);
//         }
//     }
//     return propValues;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));



// ❗ ЗАДАЧА #20

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// ТЕСТЫ

// ✅ Объявлена функция calculateTotalPrice(productName)
// ✅ Вызов calculateTotalPrice("Blaster") возвращает 0
// ✅ Вызов calculateTotalPrice("Radar") возвращает 5200
// ✅ Вызов calculateTotalPrice("Droid") возвращает 2800
// ✅ Вызов calculateTotalPrice("Grip") возвращает 10800
// ✅ Вызов calculateTotalPrice("Scanner") возвращает 8100


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//     }
//     return 0;
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));