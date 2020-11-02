

// --створити об'єкт (не меньше 5ти властивостей) який описує
//     - собаку
//     - людину
//     - автомобіль
//     - квартиру
//     - книгу


// let obj = {
//     name : 'dog',
//     age : '2',
//     color :['black', 'white'],
//     shape : 'square',
//     flat : { floor : '2'}
// }    


// --створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//     - будинок
//     - водій
//     - іграшку
//     - стіл
//     - сумка


//     let obj = {
//         house : 'big',
//         driver : 'true',
//         toy : { name : 'cat', color : 'green'},
//         table : ['round', 'black'],
//         bag : 'red'
//     }

// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
//  - статус Максима
// - ім'я передостаннього об'єкту
//  - ім'я третього об'єкта                
//  - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
//  - вік + сатус Анни


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

// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[6].age);
// console.log(users[10].age);
// console.log(users[users.length -2].name);
// console.log(users[2].name);
// console.log(users[5].age);
// console.log(users[5].status);
// console.log(users[4].age);



// --Напишіть код, який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"


// let element = document.getElementById('content');
// console.log(element);


 // - отримує текст з блоку з id "rules"

// let element = document.getElementById('rules');
// console.log(element);

// - замініть текст параграфа з id 'content' на будь - який інший

// let element = document.getElementById('content');
// element.innerText = 'Hello world!';
// element.style.backgroundColor = 'red';
// element.style.color = 'blue';

// - замініть текст параграфа з id 'rules' на будь - який інший

// let element = document.getElementById('rules');
// element.innerText = 'замініть текст параграфа  на будь - який інший';
// element.style.backgroundColor = 'red';
// element.style.color = 'blue';

// - отримати весь список класів елемента з id = rules і вивести їх в console.log

// let element = document.getElementById('rules').getElementsByClassName('fc bp');
// console.log(element);

// - отримати всі елементи з класом fc_rules

// let element = document.getElementsByClassName('fc__rules');   
// console.log(element);

// - поміняти колір тексту у всіх елементів fc_rules на червоний

// let element = document.getElementsByClassName('fc__rules');   
// for (const elem of element) {
//     elem.style.color = 'red';
   
// }

