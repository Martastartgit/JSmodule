// - создать 5 объектов.В каждом объекте не менее 3х полей.Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте)
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2



// let me = {
//     name: 'marta',
//     age : '24',
//     status : 'true'
// };

// let table = {
//     age : 'old',
//     color: 'black',
//     shape : 'round'
// };

// let man = {
//     color : 'green',
//     skills : 'js',
//     wife : 'true'
// };

// let girl = {
//     hair : 'blue',
//     age : '15',
//     eyes : 'green'

// };

// let bag = {
//     shape : 'round',
//     color : 'red',
//     leather : 'true'
// };

// for (const key in me) {
//    console.log(key);
// };
// for (const a in man) {
//     console.log(a);
// };
// for (const b in table) {
//     console.log(b);
// };
// for (const c in girl) {
//     console.log(c);
// };
// for (const d in bag) {
//     console.log(d);
// };

// - создать 5 объектов с полностью разным набором полей.В каждом объекте должен присутсвовать массив и внутренний объект.Опишите что угодно, машину, картину, болт...Пример: let man = { name: 'kokos', skills: ['java', 'js'], wife: { name: 'cherry' } };
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2


// let man = {
//     name : 'oleg',
//     skills : ['python', 'java'],
//     wife : {age : '20', name : 'Nina'}
// };


// let car = {
//     name: 'BMW',
//     color: ['white', 'black'],
//     interior: { color: 'white', leather: 'true' }
// };

// let dog = {
//     name: 'winnie',
//     skills: ['dig', 'woof'],
//     children: { number : '15'}
// };

// let woman = {
//     name: 'Inna',
//     skills: ['dance', 'sing'],
//     husband: { age: '30', name: 'Igor' }
// };

// let house = {
//     age: 'ancient',
//     floor: ['first', 'second'],
//     rooms: { windows : 'two'}
// };

// let a = Object.keys(man);
// console.log(a);

// let b = Object.keys(car);
// console.log(b);

// let c = Object.keys(dog);
// console.log(c);

// let d = Object.keys(woman);
// console.log(d);

// let e = Object.keys(house);
// console.log(e);

// - взять объекты из задания 1 и превратить каждый в json.

// let cloneMe = JSON.stringify(me);
// let cloneMan = JSON.stringify(man);
// let cloneTable = JSON.stringify(table);
// let cloneBag = JSON.stringify(bag);
// let cloneGirl = JSON.stringify(girl);

// - взять json из задания 11 и превратить их обратно в объекты.
// let a = JSON.parse(cloneMe);
// let b = JSON.parse(cloneTable)
// let c = JSON.parse(cloneBag)
// let d = JSON.parse(cloneGirl)
// let e = JSON.parse(cloneMan)

// - взять массив, в цикле перебрать его объекты превратив их в json.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
//     }, {
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
//     }, {
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
//     }, {
//         name: 'max',
//         age: 30,
//         status: true,
//         address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
//     }, {
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
//     }]

// for (let i of users) {
//     i = JSON.stringify(users);
//     console.log(i);
// }

// - взять массив, в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }];

// let newArray  = [];
// for (const i of users) {
//     newArray.push(JSON.stringify(i));
// }

// console.log(newArray);