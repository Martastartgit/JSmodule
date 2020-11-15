// - Создать произвольный елемент с id = text.Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id = "text".

// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
   
// ];

// users.forEach(user => {
//     const div = document.createElement('div');
//     div.setAttribute('id', 'text');
//     div.innerText = `name : ${user.name}, age : ${user.age}, status : ${user.status}`;
//     div.style.backgroundColor = 'pink';
//     div.style.marginBottom ='25px';
//     div.style.textAlign = 'center';

//     const btn = document.createElement('button');
//     btn.innerText = 'REMOVE';
//     btn.style.marginLeft = '25px';

//     btn.onclick = (ev) => {
//         ev.target.parentElement.style.display = 'none';
//     };

//     div.appendChild(btn);
//     document.body.appendChild(div);
// });


// Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn = document.createElement('button');
// btn.innerText = 'HIDE ME!';
// btn.style.backgroundColor = 'green';
// btn.style.color = 'white';
// btn.addEventListener('click', (ev) => {
//     btn.style.visibility = 'hidden';
// })

// document.body.appendChild(btn);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let inputText = document.createElement('input');
// inputText.setAttribute('type', 'text');

// let inputSubmit = document.createElement('input');
// inputSubmit.value = 'OK';
// inputSubmit.setAttribute('type', 'submit');

// inputSubmit.onclick = (ev) => {
//     let xx = inputText.value;
//     xx > 18 ?  alert('You are big enough') : alert('You are too small')  
// };
// document.body.appendChild(inputSubmit);
// document.body.appendChild(inputText);

// - Создайте меню, которое раскрывается / сворачивается при клике

// const div = document.createElement('div');
// let ul = document.createElement('ul');
// let li1 = document.createElement('li');
// let li2 = document.createElement('li');
// let li3 = document.createElement('li');
// let li4 = document.createElement('li');

// div.innerText = 'MENU';
// li1.innerText = 'HOME';
// li2.innerText = 'ADDRESS';
// li3.innerText = 'GALERY';
// li3.innerText = 'GALERY';
// li4.innerText = 'ARTICLES';

// div.style.color = 'grey';
// div.style.fontSize = '25px';
// div.style.marginLeft = '25px';
// div.style.fontWeight = '700';
// div.style.cursor = 'pointer';

// div.setAttribute('class','active')
// ul.style.display= 'none';

// div.onclick = () => {
//     if(div.hasAttribute('class')){
//         ul.style.display = 'block';
//         div.removeAttribute('class')
//     }
//     else {
//         ul.style.display = 'none';
//         div.setAttribute('class', 'active');
      
//     };
// }

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);
// document.body.appendChild(div);
// document.body.appendChild(ul);

// - Создать список комментариев, пример объекта коментария - { title: 'lorem', body: 'lorem ipsum dolo sit ameti' }.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

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
//     }
  
// ];

// rules.forEach(rule => {
//     const div = document.createElement('div');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');

//     p.innerText = `${rule.title} : ${rule.body}`;
//     btn.innerText = 'REMOVE';

//     btn.onclick = () => {
//         p.style.visibility = 'hidden';
//     }

//     p.appendChild(btn);
//     div.appendChild(p);
//     document.body.appendChild(div);
    
// })

// - створити 2 форми  по 2 інпути в кожній.ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм(Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API.Отже дайте формі та інпутам всі необхідні атрибути.

// const form = document.forms.form1;
// const form2 = document.forms.form2;
// let input = document.querySelectorAll('#form2 input');
// let btn = document.getElementById('button');

// input.forEach(item => {
//     item.setAttribute('name', 'gender');
// });

// form.setAttribute('name', 'myForm1');
// form2.setAttribute('name', 'myForm2');


// btn.addEventListener('click', (event) => {
//     let firstName = form.typeText.value;
//     let lastName = form.typeText2.value;
//     let data = new FormData(form2);
//     let radio = '';   
//     for (const entry of data) {
//         radio = entry[1];
//     };
//     console.log(`${firstName} ${lastName}, ${radio}`)
    
// });

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// const block = document.getElementById('block')
// function createTable(tr,td,tag) {
//     let table = document.createElement('table');
//     table.style.borderCollapse = 'collapse';
//     table.style.width = '100%';
//     table.style.textAlign = 'center';
//     for (let i = 0; i < tr; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < td; j++) {
//             const td = document.createElement('td');
//             tr.appendChild(td); 
//             td.innerHTML= i; 
//             td.style.border = '1px solid red';
//         }
//         table.appendChild(tr);   
//     }
//     tag.appendChild(table);
// }
// createTable(4,3,block)

// - Створити 3 инпута та кнопку.Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let form = document.forms.form3;
// let colls = form.coll;
// let rows = form.row;
// let text = form.text;
// let btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     let numColl = colls.value;
//     let numRow = rows.value;
//     let cellText = text.value;
//     const block = document.getElementById('block')
//     function createTable(tr, td, text) {
//        let table = document.createElement('table');
//        table.style.borderCollapse = 'collapse';
//        table.style.width = '100%';
//        table.style.textAlign = 'center';
//        for (let i = 0; i < tr; i++) {
//            const tr = document.createElement('tr');
//            for (let j = 0; j < td; j++) {
//                const td = document.createElement('td');
//                tr.appendChild(td);
//               td.innerHTML = text;
//                td.style.border = '1px solid red';
//            }
//            table.appendChild(tr);
//         }
//        block.appendChild(table);
//     }
//     createTable(numRow, numColl, cellText)
// });



// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let block = document.getElementById('block');

// let imageArray = [];
// imageArray[0] = 'images/image_1.jpg';
// imageArray[1] = 'images/image_2.jpg';
// imageArray[2] = 'images/image_3.jpg';
// imageArray[3] = 'images/image_4.jpg';

// let i = 0;
// let btn1 = document.createElement('button');
// let btn2 = document.createElement('button');

// let img = document.createElement('img');
// img.src = imageArray[i];

// btn1.innerText = 'left';
// btn2.innerText = 'right';

// block.appendChild(btn1);
// block.appendChild(img);
// block.appendChild(btn2);


// btn1.onclick =() => {
//     if(i-1 < 0) {
//         i = imageArray.length-1
//     } else {
//         i = i-1;
//     }
//     img.src =imageArray[i];
// };

// btn2.onclick = () => {
//     if (i + 1  > imageArray.length -1) {
//         i = 0;
//     } else {
//         i = i + 1;
//     }
//     img.src = imageArray[i];
// }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let array = ['Вилупок','Лайдак', 'Бовдур', 'Волоцюга', 'Дурбелик', 'Морда', 'Дідько', 'Йолоп', 'Гаспид'];
// let input = document.createElement('input');
// let btn = document.createElement('button');

// btn.setAttribute('type', 'button');
// input.setAttribute('type', 'text');

// btn.innerHTML = 'OK';

// btn.onclick = () => {
//     let word = input.value;
//     if (array.includes(word)) alert('Эта роль ругательная,  прошу ее ко мне не применять ...');
// }
// document.body.appendChild(btn);
// document.body.appendChild(input);

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let array = ['Вилупок', 'Лайдак', 'Бовдур', 'Волоцюга', 'Дурбелик', 'Морда', 'Дідько', 'Йолоп', 'Гаспид'];
// let input = document.createElement('input');
// let btn = document.createElement('button');

// btn.setAttribute('type', 'button');
// input.setAttribute('type', 'text');

// btn.innerHTML = 'OK';

// btn.onclick = () => {
//     let word = input.value;
//     let newWord = word.toString().split(' ');
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];    
//         for (let j = 0; j < newWord.length; j++) {
//             const item = newWord[j];
//             if(element === item) {
//                 alert('Эта роль ругательная,  прошу ее ко мне не применять ...')
//             }     
//         }    
//     }
// }
// document.body.appendChild(btn);
// document.body.appendChild(input);



// --создать скрипт, который берет считывает на странице(rules.html) текст и делает сбоку меню - оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let content = document.getElementById('content');
// let header = document.getElementsByTagName('h2');
// let ul = document.createElement('ul');
// for (let i = 1; i <= header.length; i++) {
//     const element = header[i];
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     let yakor = 'header' + i;
//     element.setAttribute('id', yakor);
//     a.href = '#' + yakor;
//     a.innerText = element.innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
//     content.appendChild(ul);   
// }

// --взять массив пользователей 
// Создать три чекбокса.Каждый из них активирует фильтр для вышеуказаного массива.Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false(осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let usersWithAddress = [
//     { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
//     { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
//     { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
//     { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
//     { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
//     { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
//     { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
//     { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
//     { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
// ];
// let block = document.getElementById('block');
// let content = document.createElement('div');
// content.appendChild(createArray(usersWithAddress));
// block.appendChild(content);


// function createArray(arr) {
//     const div = document.createElement('div');
//     arr.forEach(item => {
//         let p =document.createElement('p')
//         p.innerHTML = `id: ${item.id}, name : ${item.name}, age : ${item.age}, status : ${item.status}, address : city : ${item.address.city}, street : ${item.address.street}, number : ${item.address.number}`
//         div.appendChild(p);  
//     })
//     return div
// }

// const btn = document.getElementById('filterBtn');

// btn.addEventListener('click', () => {
//     let newArray = JSON.parse(JSON.stringify(usersWithAddress))
//     let inputFalse =  document.querySelector('#status');
//     let inputCity = document.querySelector('#city');
//     let inputAge = document.querySelector('#age');
//     if(inputFalse.checked) newArray = newArray.filter(item => item.status === false) 
//     if(inputCity.checked) newArray = newArray.filter(item => item.address.city === 'Kyiv')
//     if(inputAge.checked) newArray = newArray.filter(item => item.age > 29)
     
//     content.innerHTML = '';
//     content.appendChild(createArray(newArray))

// })



