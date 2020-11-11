// - створити функцію яка виводить масив

// let array = [1, 2, 4, 7, 9];
// function showArray(arr) {
//    console.log(arr);   
// }
// showArray(array)

//  - створити функцію яка заповнює масив рандомними числами та виводить його.Для виведення використати попвередню функцію.

// function createMas(min, max) {
//     let mas = [];
//     for (let i = 0; i < 50; i++) {
//         mas.push(Math.floor(Math.random() * (max - min)) + min);
//     }
//     console.log(mas);
// }

// let array1 = createMas(1,50);
// showArray(array1)


// - створити функцію яка приймає три числа та виводить та повертає найменьше.


// function returnMin(a, b, c) {
//     let min = a;
//     b > c ? min = c : min = b;
//     min > a ? min = a : "";
//     return min;
// }

// let min = returnMin(70, 410, 50);
// console.log(min);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.


// function returnMax(a, b, c) {
//     let max = a;
//     b > c ? max = b : max = c;
//     max < a ? max = a : "";
//     return max;
// }

// const max = returnMax(70, 410, 50);
// console.log(max);

// - створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить найбільше


// function returnMinshowMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i of arguments) {
//         if (i < min) min = i;
//         if (i > max) max = i   
//     }
//     console.log(max);
//     return min
// };
// const MIN = returnMinshowMax(1,2,3,4,5,6,7,8,9,10);
// console.log(MIN);


// - створити функцію яка повертає найбільше число з масиву

// let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function returnMax(number) {
//     let max = 1;
//   for (const i of number) {
//       if (i > max) max = i;
//   }
//   return max
// };
// const MAX = returnMax(mas);
// console.log('max', MAX);

// - створити функцію яка повертає найменьше число з масиву


// let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function returnMin(number) {
//     let min = mas[0];
//   for (const i of number) {
//       if (i < min) min = i;
//   }
//   return min
// };
// const MIN = returnMin(mas);
// console.log('min', MIN);


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function sumArray(array) {
//     let sum = 0;
//    for (const i of array) {
//        sum += i;
//    }
//     return sum;

// };
// const SUM = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(SUM);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function sumArray(array) {
//     let sum = 0;
//     for (const i of array) {
//         sum += i;
//     }
//     return sum / array.length;

// };
// const SUM = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(SUM);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];

// let pos = function(array) {
//     let number = 0;
//     for (const key in array) {
//         number ++;
//     }
//     return number;
// }

// const NUM = pos(users)
// console.log(NUM);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];

// let pos = function(array) {
//     let sum = 0;
//     for (const i of array) {
//         for (const key in i) {
//             sum++;
//         }
//     }
//     return sum;
// }

// const SUM = pos(users)
// console.log(SUM);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// let array1 = [1, 2, 3, 4];
// let array2 = [2, 3, 4, 5];
// let newArray =[];

// function result(one, two) {
//     let sum = 0;
//     for (let i = 0; i < one.length; i++) {
//         newArray.push(one[i] + two[i]);
//     }
//     return newArray;
// }
// const RES = result(array1, array2);
// console.log(RES);


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let array = [1, 2, 3, 4];
// let array1 = JSON.stringify(array);

// function  changeIndex(arr, index) {
//     let num = arr[index];
//     arr[index] = arr[index + 1];
//     arr[index + 1] = num;
  
//     return arr;
// };

// const RESULT = changeIndex(array, 2);
// console.log(array1);
// console.log(RESULT);


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1, 0, 6, 0, 3] => [1, 6, 3, 0, 0]

// let array = [0, 1, 0, 6, 0, 3];
// function findZero(arr) {
//     let zero = [];
//     let num =[];
//     for (const i of arr) {
//         i === 0 ? zero.push(i) : num.push(i);
//     }    
//     return num.concat(zero)
    
// }
// let array1 = findZero(array)
// console.log(array);
// console.log(array1);

// - Додає в боді блок з текстом "Hello owu"

// function createElement(text) {
//     let element = document.createElement('div');
//     element.innerText = text;
//     element.style.backgroundColor = 'green';
//     document.body.appendChild(element);

// };
// createElement('Hello owu')

// - Додає в боді елемент з текстом.Тип елементу та текст отримати через аргументи

// function createElement(text, tag) {
//     let element = document.createElement(tag);
//     element.innerText = text;
//     document.body.appendChild(element);
// };
// createElement('HELLO JS', 'h1')

// - приймає масив автомобілів(можна взяти з попередніх дз), та  індентифікатор елемнту в який потрібно додати список цих автомобілів.Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.

// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];

// function addElement(array,idTag) {
//     let div = document.getElementById(idTag);
//     let block = document.createElement('div')

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const h3 = document.createElement('h3');
//         h3.innerHTML = `${i} - name : ${element.name}, age : ${element.age}, status : ${element.status} `;
//         block.appendChild(h3);
//     }
    
//     div.appendChild(block);
  
// };


// addElement(users, 'list')

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.Всі властивості авто в обному блоці


// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];

// function addElement(array, idTag) {
//     let div = document.getElementById(idTag);
//     let block = document.createElement('div');
    
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const h3 = document.createElement('h3');
//         const p = document.createElement('p');
//         h3.innerHTML = `name : ${element.name}`;
//         p.innerHTML = `age : ${element.age}, status : ${element.status}`;
//         block.appendChild(h3);
//         block.appendChild(p);
        
//     }

//     div.appendChild(block);

// };


// addElement(users, 'list')



// функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.

// let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false }, { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true }, { id: 4, name: 'olya', age: 28, status: false },];
// let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' }, { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' }, { user_id: 4, country: 'USA', city: 'Miami' },];

// function unitedArray (array1, array2) {
//     let users = [...array1];
//     let cities = [...array2];
//     for (const item1 of users) {
//         for (const item2 of cities) {
//             if(item1.id === item2.user_id)
//             item1.adress = item2;
//         }
//     }
//     return users

// };
// let usersWithCities = unitedArray(usersWithId, citiesWithId);
// console.log(usersWithCities);

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];

// function createElement (array) {
//     let block = document.createElement('div'); 
//     for (let item = 0; item < array.length; item++) {
//         const element = array[item];
//         const h2 = document.createElement('h2');
//         const p = document.createElement('p');

//         h2.innerHTML = `title : ${element.title}`;
//         p.innerHTML = `body : ${element.body}`;
//         block.appendChild(h2);
//         block.appendChild(p); 
        
//     }
//     document.body.appendChild(block);

// };

// createElement(rules);

// Вирівняти багаторівневий масив в однорівневий
// [1, 3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

// let array = [1, 3, ['Hello, Wordd', [9,6,1]], ['oops'], 9];

// function flatten (arr) {
//     let flattenArray = [];
//     for (const item of arr) {
//         (Array.isArray(item))  
//         ? flattenArray = flattenArray.concat(flatten(item)) 
//         : flattenArray.push(item);
//     }    

//     return flattenArray;

// };

// console.log(array);

// const array1 = flatten(array);
// console.log(array1);


// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// let array = [2,1, 3, ['Hello, Wordd'], [9,6,1], ['oops'], 9];

// function deepClone (arr) {
//     let arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//            arr1[i] = deepClone(arr[i]); 
//         } 
//         else  {
//             arr1[i] = arr[i];    
//         }
        
//     }
//     console.log(arr1);

//     return arr1;

// };

// deepClone(array);


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

// class Car {
//     constructor(name, engine, owner, price, modelYear) {
//         this.name = name;
//         this.engine = engine;
//         this.owner = owner;
//         this.price = price;
//         this.modelYear = modelYear;
//     }
    
// };

// class FixedCar extends Car{
//     constructor(name, engine, owner, price, modelYear){
//         super(name, engine, owner, price, modelYear)
//     }
//     fixEngine(newValue) {
//         this.engine +=newValue;
//     }
//     newOwner(driver){
//         this.owner = driver;
//     }
// }


// let car1 = new FixedCar('Mazda', 230, {name : 'Ihor', age : 26, experience : 4}, 500, 2002);
// let car2 = new FixedCar('Mazda', 333, {name : 'Dima', age : 55, experience : 30}, 100, 2012);
// let car3 = new FixedCar('Mazda', 343, {name : 'Oleg', age : 70, experience : 50}, 200, 2000);
// let car4 = new FixedCar('Mazda', 200, {name : 'Vova', age : 18, experience : 1}, 150, 2007);
// let car5 = new FixedCar('Mazda', 500, {name : 'Stepan', age : 40, experience : 23}, 600, 1996);
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
//             item.engine +=10;
//             item.price += 5;
//         }
//         if (item.owner.experience < 5 && item.owner.age > 25){
//             console.log(`${item.owner.name} needs to go to driving course `);
//             item.owner.experience +=1;
//         }
//         sum += item.price;        
//     }       

//      console.log(arr);
    
//     return sum;

// };
// let result = increaseValue(cars);
// console.log(result);






