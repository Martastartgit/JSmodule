// - создать массив с 20 числами.
// let array = [1, 6, 3, 8, 4, 2, 10, 24, 65, 888, 11, 5, 33, 5542, 986, 25, 4560, 9, 76,34]
// --при помощи метода sort и колбека  отсортировать массив.
// array.sort((a,b) => a - b);
// console.log(array);

// --при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// array.sort((a,b) => b - a);
// console.log(array);

// --при помощи filter получить числа кратные 3
// let arr = array.filter(value => value % 3 === 0)
// console.log(arr);

// --при помощи filter получить числа кратные 10
// let arr1 = array.filter(value => value % 10 === 0)
// console.log(arr1);

// --перебрать(проитерировать) массив при помощи foreach()
// array.forEach((value, index) => {
//     console.log(index);
// })

// --перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let arr = array.map( value => value * 3);
// console.log(arr);

//  - создать массив со словами на 15 - 20 элементов.
//  let strArray = ['Js', 'Java', 'Python', 'Css', 'Html', 'Ruby', 'Vue', 'React', 'Angular', 'Php', 'Swift', 'Typescript', 'Pascal', 'Hypertalk', 'Logo']

// --отсортировать его по алфавиту в восходящем порядке.
// strArray.sort();
// console.log(strArray);

// --отсортировать его по алфавиту  в нисходящем порядке.
// strArray.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     return 1;
// })

// console.log(strArray);

// --отфильтровать слова длиной менее 4х символов
// let newStrArray = strArray.filter(value => value.length < 4);
// console.log(newStrArray);

// --перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let newStrArray = strArray.map(value => value + '!');
// console.log(newStrArray);

// Все робити через функції масивів(foreach, map ...тд)
// Дан масив:
// - відсортувати його за  віком(зростання, а потім окремо спадання)
// let users = [{ name: 'vasya', age: 31, status: false },
//              { name: 'petya', age: 30, status: true }, 
//              { name: 'kolya', age: 29, status: true }, 
//              { name: 'olya', age: 28, status: false }, 
//              { name: 'max', age: 30, status: true }, 
//              { name: 'anya', age: 31, status: false },
//              { name: 'oleg', age: 28, status: false },
//              { name: 'andrey', age: 29, status: true }, 
//              { name: 'masha', age: 30, status: true }, 
//              { name: 'olya', age: 31, status: false }, 
//              { name: 'max', age: 31, status: true },
// ];

// users.sort((a, b) => a.age - b.age);
// console.log(users);

// users.sort((a, b) => b.age - a.age);
// console.log(users);


// - відсортувати його за кількістю знаків в імені(зростання, а потім окремо спадання)
// users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);

// users.sort((a, b) => b.name.length - a.name.length);
// console.log(users);


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив(первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let newUsers = JSON.parse(JSON.stringify(users));
// let newArrayUsers = newUsers.map((value, index) => {
//     value.id = index;
//     return value;
// });
// newArrayUsers.sort((a, b) => b.id - a.id);
// console.log(newArrayUsers);
// console.log(users);



// Відфільтрувати масив за наступними крітеріями:
let cars = [{ producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 }, 
            { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 }, 
            { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
            { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 }, 
            { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
            { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 }, 
            { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 }, 
            { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 }, 
            { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
            { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 }, 
            { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 }, 
            { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 }, 
            { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 },        
];

// - двигун більше 3х літрів
// let newCars = cars.filter(value => value.volume > 3);
// console.log(newCars);

// - двигун = 2л
// let newCars = cars.filter(value => value.volume = 2);
// console.log(newCars);

// - виробник мерс
// let newCars = cars.filter(value => value.producer == 'mercedes');
// console.log(newCars);

// - двигун більше 3х літрів + виробник мерседес
// let newCars = cars.filter(value => value.producer == 'mercedes' && value.volume > 3);
// console.log(newCars);

//  - двигун більше 3х літрів + виробник субару
// let newCars = cars.filter(value => value.producer == 'subaru' && value.volume > 3);
// console.log(newCars);

// - сили більше ніж 300
// let newCars = cars.filter(value => value.power > 300);
// console.log(newCars);

//- сили більше ніж 300 + виробник субару
// let newCars = cars.filter(value => value.power > 300 && value.producer == 'subaru');
// console.log(newCars);

//    - мотор серіі ej
// let newCars = cars.filter(value => value.engine.startsWith('ej'));
// console.log(newCars);

//  - сили більше ніж 300 + виробник субару + мотор серіі ej
// let newCars = cars.filter(value => value.engine.startsWith('ej') && value.power > 300 && value.producer == 'subaru');
// console.log(newCars);

//  - двигун меньше 3х літрів + виробник мерседес
// let newCars = cars.filter(value => value.volume < 3 && value.producer == 'mercedes');
// console.log(newCars);

// - двигун більше 2л + сили більше 250
// let newCars = cars.filter(value => value.volume > 2  && value.power > 250);
// console.log(newCars);

// - сили більше 250 + виробник бмв
// let newCars = cars.filter(value => value.power > 250 && value.producer == 'bmw');
// console.log(newCars);

// - взять слдующий массив
// let usersWithAddress = [{ id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } }, 
//                        { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } }, 
//                        { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }, 
//                        { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } }, 
//                        { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } }, 
//                        { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } }, 
//                        { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } }, 
//                        { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } }, 
//                        { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } }, 
//                        { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } }, 
//                        { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
                    
// ];

// // --отсортировать его по id пользователей
// usersWithAddress.sort();
// console.log(usersWithAddress);

// --отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(usersWithAddress);

// --отсортировать его по возрасту пользователей
// usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(usersWithAddress);

// --отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(usersWithAddress);

// --отсортировать его по имени пользователей
// usersWithAddress.sort((a, b) => {
//     if(a.name < b.name) {
//         return -1;
//     }
//     return 1;
// });
// console.log(usersWithAddress);

// --отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((a, b) => {
//     if(b.name < a.name) {
//         return -1;
//     }
//     return 1;
// });
// console.log(usersWithAddress);

// --отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((a, b) => {
//     if(a.address.street < b.address.street) {
//         return -1;
//     }
//     return 1;
// });
// console.log(usersWithAddress);

// --отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(usersWithAddress);

// --отфильтровать(оставить) тех кто младше 30
// let newUsersWithAdress = usersWithAddress.filter(item => item.age < 30);
// console.log(newUsersWithAdress);

// --отфильтровать(оставить) тех у кого отрицательный статус
// let newUsersWithAdress = usersWithAddress.filter(item => item.status == false);
// console.log(newUsersWithAdress);

// --отфильтровать(оставить) тех у кого отрицательный статус и младше 30 лет
// let newUsersWithAdress = usersWithAddress.filter(item => item.age < 30 && item.status == false);
// console.log(newUsersWithAdress);

// --отфильтровать(оставить) тех у кого номер дома четный
// let newUsersWithAdress = usersWithAddress.filter(item => item.address.number % 2 == 0);
// console.log(newUsersWithAdress);


// Задача: дан отсортированный по возрастанию массив целых чисел.Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента.Если такого элемента нет в массиве, выведите - 1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// let min = 0;
// let max = 0;

// arr.forEach(element => {
//     max = arr.lastIndexOf(element);
//     min = arr.indexOf(element);
//     console.log(`Key : ${element} Answer: MinIndex = ${min}, MaxIndex : ${max}`);

// });


// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10 % (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв(переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку(цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10 % та ціну на 5 %
//     Після того зробити перевірку досвіду ВСІХ наших водіїв.Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// function Car(name, power, owner, price, modelYear) {
//     this.name = name;
//     this.power = power;
//     this.owner = owner;
//     this.price = price;
//     this.modelYear = modelYear;
// };       

// Car.prototype.fixEngine = function (newValue) {
//     this.power += newValue;
// };

// Car.prototype.newOwner = function (driver) {
//     this.owner = driver;
// };
    
// let car1 = new Car('Mazda', 230, {name : 'Ihor', age : 26, experience : 4}, 500, 2002);
// let car2 = new Car('Mazda', 333, {name : 'Dima', age : 55, experience : 30}, 100, 2012);
// let car3 = new Car('Mazda', 343, {name : 'Oleg', age : 70, experience : 50}, 200, 2000);
// let car4 = new Car('Mazda', 200, {name : 'Vova', age : 18, experience : 1}, 150, 2007);
// let car5 = new Car('Mazda', 500, {name : 'Stepan', age : 40, experience : 23}, 600, 1996);
// let car6 = new Car('Mazda', 700, {name : 'Ostap', age : 27, experience : 3}, 700, 1967);
// let car7 = new Car('Mazda', 212, {name : 'Viltor', age : 30, experience : 10}, 590, 2010);
// let car8 = new Car('Mazda', 100, {name : 'Alex', age : 19, experience : 5}, 450, 2009);
// let car9 = new Car('Mazda', 290, {name : 'Max', age : 28, experience : 2}, 435, 2014);
// let car10 = new Car('Mazda', 400, {name : 'Ivan', age : 20, experience : 2}, 124, 1990);

// let cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

// car1.fixEngine(10);
// car2.fixEngine(10);
// car3.fixEngine(10);
// car4.fixEngine(10);
// car5.fixEngine(10);

// car1.newOwner({name : 'David', age : 27, experience : 4});
// car2.newOwner({name: 'John', age: 29, experience: 10 });
// car3.newOwner({name: 'Jack', age: 34, experience: 40 });
// car4.newOwner({name: 'Tom', age: 30, experience: 5 });
// car5.newOwner({name: 'Nicolas', age: 29, experience: 3});

// function increaseValue (arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (i % 2 !== 0) {
//             item.power +=10;
//             item.price += 5;
//         }
//         if (item.owner.experience < 5 && item.owner.age > 25){
//             console.log(`${item.owner.name} needs to go to driving course `);
//             item.owner.experience +=1;
//         }
//         sum += item.price;        
//     }       
//     console.log(arr);
//     return sum;
// };

// let result = increaseValue(cars);
// console.log(result);


// Знайти набільший елемент в масиві за допомогою reduce
// [1, 6, 9, 0, 17, 88, 4, 7] -> 88

// let number = [1, 6, 9, 0, 17, 88, 4, 7];
// let newNumber = number.reduce((acc, value) => {
//     if(value > acc) {
//         acc = value;
//     }
//     return acc
// })
// console.log(newNumber);
// console.log(number);


// Дополнительное задание:
// сложить цифры числа:

// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5

// let num = 99;
// let num1 = num.toString().split('')
// let sumArray = num1.reduce((acc, value) => +acc + +value);

// console.log(sumArray);


// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд.Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

// let newN = 21764919476100; 
// let new1 = newN.toString().split('');
// console.log(new1);
// let count = 0;
// new1.forEach((item) => { 
//     if(item == 1) {  
//         if(new1.indexOf(item) < new1.indexOf('0'))  {
//             count += 1;   
                
//         }         
//     }    
    
// })
// console.log(count);

// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —> "3000 + 200 + 70 +5"
// let num = 3275;
// let num1= num.toString();

// function numB(arr) {
//     let xx = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         xx = (arr.length -1) - i; 
//         let rr = Math.pow(10, xx);
//         element *= rr;
//         console.log(`${element} + ${element} + ${element} + ${element}`);
//     }
//     
// }
// numB(num1)



