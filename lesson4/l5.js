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
    
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const block = document.createElement('div');
//         const h3 = document.createElement('h3');
//         const p = document.createElement('p');
//         h3.innerHTML = `name : ${element.name}`;
//         p.innerHTML = `age : ${element.age}, status : ${element.status}`
//         block.appendChild(h3);
//         block.appendChild(p);
//         
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
//         block.appendchild(h2);
//         block.appendchild(p); 
        
//     }
//     document.body.appendchild(block);

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
