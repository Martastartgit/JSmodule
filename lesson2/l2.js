// --створити масив та вивести його в консоль:
//     - з 5 числових значень
//     - з 5 стічкових значень
//     - з 5 значень стрічкового, числового та булевого типу

// let colors = ['Green', 'Blue', 'Yellow', 'Red', 'Black'];
// let num = [1, 2, 3, 4, 5];
// let dif = ['dark', 2, true, 3, 'white'];

// console.log(colors);
// console.log(num);
// console.log(dif);


// --Створити пустий масив.Наповнити його будь - якими значеннями звертаючись до конкретного індексу.Вивести в консоль

// let empty = [];
// empty[0] = 'cat';
// empty[1] = 2;
// empty[2] = true;

// console.log(empty);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 1; i <= 10; i++) {
//     document.write('<div>Hello World!!</div>');
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 1; i <= 10; i++) {
//     document.write(`<div>Hello,${i},World!!</div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 1;
// while (i <= 20) {
//     document.write('<h1>Hello world!!</h1>');
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 1;
// while (i <= 20) {
//     document.write(`<h1>Hello, ${i} ,world!!</h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів.Вивести в консоль всі його елементи в циклі.

// let ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < ten.length; i++) {
//     console.log(ten[i]); 
// }


// - Створити масив з 10 строкрових елементів.Вивести в консоль всі його елементи в циклі.

// let str = ['cat', 'dog', 'man', 'woman', 'people', 'pencil', '10', '8', 'js', 'comp'];
// let i = 0;
// while (i < str.length) {
//     console.log(str[i]);
//     i++;
// }


// - Створити масив з 10 елементів будь - якого типу.Вивести в консоль всі його елементи в циклі.

// let mas = [true, 10, 'word', '10', 21, false, 'hello', '2', 55, 4];
// for (let i = 0; i < mas.length; i++) {
//     console.log(mas[i]);  
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою if та typeof вивести тільки булеві елементи

// let nac = ['js', true, 19, '865', false, 23, 'php', true, 'python', 5];

// for (const a of nac) {
//     if (typeof a == 'boolean') {
//         console.log(a);
//     }   
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою if та typeof вивести тільки числові елементи

// let nac = ['js', true, 19, '865', false, 23, 'php', true, 'python', 5];

// for ( const b of nac) {
//     if (typeof b == 'number') {
//         console.log(b);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let nac = ['js', true, 19, '865', false, 23, 'php', true, 'python', 5];

// for ( const c of nac) {
//     if (typeof c == 'string') {
//         console.log(c);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let mas = [];
// mas[0] = 'word';
// mas[1] = 1;
// mas[2] = true;
// mas[3]= true;
// mas[4]= 34;
// mas[5]= '23';
// mas[6]= false;
// mas[7]= 5;
// mas[8]= 'web';
// mas[9]= 'okten';

// for (let i = 0; i < mas.length; i++) {
//     console.log(mas[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i++) {
//     console.log('step : ',i); 
//     document.write('step : ',i + '<br/>');   
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log('step : ', i);
//     document.write('step :', i + '<br/>');
    
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 200; i+=2) {
//     console.log(`step : ${i}`);
//     document.write(`step : ${i} <br>`);
    
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(`step : ${i}`);
//         document.write(`step : ${i} <br>`);
//     }
    
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(`step : ${i}`);
//         document.write(`step : ${i} <br>`);
//     }
    
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини(2 цикли! 1й - хвилини, 2й - секунди)

// let s = 0;
// let m = 0;
// for (let i = 0; i <= 2; i++) {
//     console.log('min :', m++);
//     if (m === 3) break;
//     for (let i = 0; i <= 59; i++) {
//         console.log('sec :', s++);
//     }
//     s = 0;
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини(3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// let s = 0;
// let m = 0;
// let h = 0;

// for (let i = 0; i <= 2; i++) {
//     console.log('hour: ', h++);
//     if (h === 3 && m ===21) break;
//     for (let i = 0; i <= 59; i++) {
//     console.log('min :', m++);
//         if (h === 3 && m === 21) break;
//         for (let i = 0; i <= 59; i++) {
//             console.log('sec :', s++);
//         }
//         s = 0;
//     }
//     m = 0;
// }

// Додатково

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let mas1 = ['a', 'b', 'c'];

// for (let i = 0; i < mas1.length; i++) {
//     console.log(mas1[i] + mas1[++i] + mas1[++i]);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let mas1 = ['a', 'b', 'c'];

// let i = 0;
// let a = '';
// while (i < mas1.length) {
//     a += mas1[i];
//     i++;
// }
// console.log(a);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let mas1 = ['a', 'b', 'c'];

// let a ='';

// for (let i of mas1) {
    
//     a += i;
// }
// console.log(a);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.

// let mas1 = ['a', 'b', 'c'];

// let a ='';

// for (let i in mas1) {

//     a += mas1[i];
// }
// console.log(a);


// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let mas = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     mas.push(i);
// } 
//    console.log(mas);

// - Дан масив[1, 2, 3].Зробіть з нього новий масив[3, 2, 1].

// let mas = [1, 2, 3];
// let mas2 =[];

// for (let i = mas.length - 1; i > -1; i--) {
//     mas2.push(mas[i]);
// }

// console.log(mas2);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let mas2 = [1, 2, 3];

// for (let i = 4; i <=6; i++) {
//     mas2.push(i);
    
// }
// console.log(mas2);

// - Дан масив[1, 2, 3].Додайте йому в початок елементи 4, 5, 6.

// let mas2 = [1, 2, 3];

// for (let i = 6; i >= 4; i--) {
//     mas2.unshift(i);
    
// }
// console.log(mas2);

// - Дан масив['js', 'css', 'jq'].Виведіть на екран перший елемент за допомогою shift()- 
// Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let mas3 = ['js', 'css', 'jq'];
// alert(mas3.shift());
// alert(mas3.pop());


// - Дан масив[1, 2, 3, 4, 5].За допомогою методу / функції slice перетворіть масив в[4, 5].

// let mas2 = [1, 2, 3, 4, 5];
// console.log(mas2.splice(3));


// - Дан масив[1, 2, 3, 4, 5].За допомогою методу / функції slice перетворіть масив в[1, 2].

// let mas2 = [1, 2, 3, 4, 5];
// console.log(mas2.splice(0,2));


// - Дан масив[1, 2, 3, 4, 5].За допомогою методу / функції splice перетворіть масив в[1, 4, 5].

// let mas2 = [1, 2, 3, 4, 5];
// mas2.splice(1, 2);
// console.log(mas2);


// - Дан масив[1, 2, 3, 4, 5].За допомогою методу / функції splice зробіть з нього масив[1, 2, 3, 'a', 'b', 'c', 4, 5].

// let mas2 = [1, 2, 3, 4, 5];
// mas2.splice(3, 0, 'a', 'b', 'c');
// console.log(mas2);


// - Дан масив[1, 2, 3, 4, 5].За допомогою методу / функції splice зробіть з нього масив[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let mas2 = [1, 2, 3, 4, 5];
// mas2.splice(1, 0, 'a', 'b');
// mas2.splice(6, 0, 'c');
// mas2.splice(8, 0, 'e');
// console.log(mas2);


// - Взяти масив з 10 чисел або створити його.Вивести в консоль тільки ті елементи, значення яких є парними.

// let ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < ten.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(ten[i]);
//     }
// }


// - Взяти масив з 10 чисел або створити його.Створити 2й порожній масив.За допомогою будь - якого циклу та push() скопіювати значення одного масиву в інший

// let ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let mas3 = [];
// for (let i = 1; i <= ten.length; i++) {
//     mas3.push(i);
// }
// console.log(mas3);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let mas3 = [];
// for (let i = 0; i < ten.length; i++) {
//     mas3[i] = (ten[i]);
// }
// console.log(mas3);

