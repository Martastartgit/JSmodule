// --змінює колір тексту елемнту з ід main_header на будь - який інший

// let element = document.getElementById('main_header');
// element.style.color = 'red';

// --робить шириниу елементу ul 400 пікселів

// let element = document.getElementsByTagName('ul');

// for (const e of element) {
//     e.style.width = '400px';
// }

// --робить шириниу всіх елементів з класом linkList шириною 50 %
// let element = document.getElementsByClassName('linkList');
// for (const i of element) {
//     i.style.width = '50%';
// }

// --отримує текст який зберігається в елементі з класом listElement2
// let element = document.getElementsByClassName('listElement2');
// for (const i of element) {
//     console.log(i.textContent);
    
// }

// --отримує всі елементи li та змінює ім колір фону на сірий

// let element = document.getElementsByTagName('li')
// console.log(element);

// for (const i of element) {
//     i.style.backgroundColor = 'grey';
//     i.style.margin = '10px';
// }

// --отримує всі елементи 'a' та додає їм клас anchor

// let element = document.getElementsByTagName('a');
// for (const i of element) {
//     i.classList.add('anchor');
// }

// --отримує всі елементи 'a' та додає їм клас element_XXX.Де XXX - текстовий контент елементу a

// let element = document.getElementsByTagName('a');
// let xxx ='';
// for (const i of element) {
//     i.classList.add(`element_${xxx}`);
//     xxx = i.textContent;
// }


// --отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let element = document.getElementsByTagName('a');
// let x = '';
// for (const i of element) {
//     x = i.textContent;
//     if(x === 'link3') {
//         i.style.fontSize = '40px';
//     }
// }

// --отримує всі елементи 'sub-header' та змінює колір фону.Фон отримати з prompt()

// let element = document.getElementsByClassName('sub-header');
// let color = prompt('color');
// for (const i of element) {
//     i.style.backgroundColor = color;
// }

// --отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.Текст отримати з prompt()

// let element = document.getElementsByClassName('content_1');
// let text = prompt('text')
// for (const i of element) {
//     i.innerText = text;
// }

// --отримати елементи p та змінити їм paddin на довільне значення

// let element = document.getElementsByTagName('p');
// for (const i of element) {
//     i.style.padding = '25px';
    
// }

// --отримати елементи з класом text2 та змінити їм текст на довільне значення

// let element = document.getElementsByClassName('text2');
// for (const i of element) {
//     i.innerText = 'отримати елементи з класом text2 та змінити їм текст на довільне значення';
// }