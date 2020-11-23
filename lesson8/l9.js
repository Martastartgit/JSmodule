
// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// const content = document.getElementById('content');

// function createTextArea(div){
//     let area = document.createElement('textarea');
//     let label  = document.createElement('label');
//     let btn =document.createElement('button');

//     label.setAttribute('for','area');
//     label.setAttribute('style', 'display:block; margin-bottom:10px');
//     label.innerHTML = 'Розкажіть нам свою історію :';
    
//     area.setAttribute('id','area');
//     area.setAttribute('style', 'padding:5px')
//     area.rows = 5;
//     area.cols = 50;
//     area.placeholder = 'Жили були...'

//     btn.innerHTML = 'Стерти текст';
//     btn.style.display ='block';

//     div.appendChild(label);
//     div.appendChild(area);
//     div.appendChild(btn);

//     btn.onclick = () => {
//         localStorage.clear();
//         area.value ='';
//     }

// }
// createTextArea(content)

// area.oninput = () => {
//     localStorage.setItem('text',area.value);
// }

// let localAreaText = localStorage.getItem('text');

// localAreaText ? area.value = localAreaText : area.value ='';
    


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие - то данные и закрывает страницу(не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let form = document.forms.form;
// let input = document.querySelectorAll('input');
// let label = document.querySelectorAll('label');
// let p = document.querySelectorAll('p');
// let btn = document.getElementById('submit')

// form.setAttribute('style', 'display:flex; flex-direction:column; width:250px');

// p.forEach(p => {
//     p.setAttribute('style', 'font-weight:700')
// })

// label.forEach(elem => {
//     elem.setAttribute('style', 'font-size:18px; margin-top:10px; margin-bottom:10px')
// })

// function setLocalItem(forma) {
//     for (let i = 0; i < forma.length; i++) {
//         const element = forma[i];
//         if(element.type === 'checkbox' || element.type === 'radio'){
//             element.checked
//                 ? element.value = true
//                 : element.value = false;
//         }
//         localStorage.setItem(element.id, element.value)       
//     }
// }

// function getLocalItem(forma) {
//     for (let i = 0; i < localStorage.length; i++) {
//         const element = forma[i];
//         if (localStorage.hasOwnProperty(element.id)) {
// 			element.value = localStorage.getItem(element.id)
// 			if (element.value === 'true'){
// 				element.setAttribute('checked','checked');
// 			}
// 		}        
//     }
// }

// form.oninput= () => {
//     setLocalItem(form)
// }
// getLocalItem(form)

// Дан текстареа.В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются"(в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование: хранить историю своих изменений(даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории(не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let area = document.getElementById('area');
// let clear = document.getElementById('clear');
// let save = document.getElementById('save');
// let arrowLeft = document.getElementById('arrow_left')
// let arrowRight = document.getElementById('arrow_right')


// save.onclick = (e) => {
//     e.preventDefault()
//     localStorage.setItem(localStorage.length, area.value);

// }

// arrowLeft.onclick = () => {
//     arrowRight.style.visibility = 'visible';

//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === area.value) {
//                 index = key;
//             }
//         }
//     }
//     if (index === '0') {
//         arrowLeft.style.visibility = 'hidden';
//         return
//     }
//     area.value = localStorage.getItem(index - 1);

// }

// arrowRight.onclick = () => {
//     arrowLeft.style.visibility = 'visible';

//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === area.value) {
//                 index = key;
//             }
//         }
//     }
//     if (index === (localStorage.length-1).toString()) {
//         arrowRight.style.visibility = 'hidden';
//         return;
//     }
//     area.value = localStorage.getItem(+index + 1);

// }

// clear.onclick = () => {
//     localStorage.clear()
//     area.value = ''
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять: ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.

let form = document.forms.myForm;
let div = document.getElementById('divka');
let btn = document.getElementById('button');
let submit = document.getElementById('submit');
const key = 'user';
let tempUser = {};


function createDiv(user) {
    let block = document.createElement('div');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');

    btn1.innerHTML = 'Видалити';
    btn2.innerHTML = 'Редагувати';
    
    let flag = true;
    for (const key in user) {
        if (flag) {
            const h3 = document.createElement('h3');
            h3.innerText = `${key} : ${user[key]}`;
            block.appendChild(h3);
            flag = false;         
        } else {
            const p = document.createElement('p');
            p.innerText = `${key} : ${user[key]}`;
            block.appendChild(p); 
        }

    }
    block.style = "width: 300px; border: 1px solid blue; float:left; padding-left:5px;";

    btn1.onclick = function () {
        deleteUser(user.id);
    }

    btn2.onclick = function () {
        edit(user.id);
    }

    block.appendChild(btn1);
    block.appendChild(btn2);
    return block;

    
}

submit.onclick = () => {
    let user = {...tempUser};
    tempUser = {};
    for (let index = 0; index < form.length; index++) {
        const element = form[index];
        if (element.value !== 'Submit' && element.value !== 'Reset') {
            user[element.name] = element.value;

        }  
    }
    if (!user.id) {
        user.id = new Date().getTime();
    }

    localUser(user);
    

}

function localUser(user) {
    if (localStorage.hasOwnProperty(key)) {
        let userLocal = JSON.parse(localStorage.getItem(key));
        let arrayUser = [...userLocal];
        const findUser = arrayUser.find(value => {
            value.id === user.id
        });
        if (findUser) {
            const filterUser = arrayUser.filter(item => item.id !== user.id);
            filterUser.push(user);
            localStorage.setItem(key, JSON.stringify(filterUser))

        } else {
            arrayUser.push(user);
            localStorage.setItem(key, JSON.stringify(arrayUser));
        }
    } else {
        localStorage.setItem(key, JSON.stringify([user]));
    }

};

function getData() {
    if (localStorage.hasOwnProperty(key)) {
        let dataUser = JSON.parse(localStorage.getItem(key));
        for (const user of dataUser) {
            div.appendChild(createDiv(user))

        }
    }

};

getData();

function deleteUser(id) {
    const arrayParse = JSON.parse(localStorage.getItem(key));
    const parseFilter = arrayParse.filter(user => user.id !== id);
    localStorage.setItem(key, JSON.stringify(parseFilter));
    location.reload()

}

function edit(id) {
    const parse = JSON.parse(localStorage.getItem(key));
    const user = parse.find(user => user.id == id);
    for (let index = 0; index < form.length; index++) {
        const element = form[index];
        if (element.value !== 'Submit' && element.value !== 'Reset') {
            for (const key in user) {
                if (element.name === key) {
                    element.value = user[key];
                }

            }

        }
    }
    tempUser = user;
}

btn.onclick = () => {
    localStorage.clear()
    div.innerHTML = ''
}
