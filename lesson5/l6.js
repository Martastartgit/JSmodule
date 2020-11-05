// -  Створити функцію конструктор для об'єкту який описує теги

// function Tag(name, action, attrs) {
//     this.titleOfTag = name;
//     this.tagAction = action;
//     this.attrs = attrs;
// }

// let tagA = new Tag('a', 'Тег <a> предназначен для создания ссылок', [{ titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.' },
// {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},{ titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'}]);

// let tagDiv = new Tag('div', 'Тег <div> предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{ titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' },
// {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]);

// let tagH1 = new Tag('h1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня', [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.' }]);

// let tagSpan = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа.', [{ titleOfAttr: 'style', actionOfAttr: 'Применяется для определения стиля элемента с помощью правил CSS.' },
// {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' }]);

// let tagInput = new Tag('input', 'Тег <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', [{titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
// {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.'}, { titleOfAttr: 'placeholder', actionOfAttr: 'Выводит подсказывающий текст.'}]);

// let tagForm = new Tag('form', 'Тег <form> устанавливает форму на веб-странице.', [{titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'},
// {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.' }, {titleOfAttr: 'name', actionOfAttr: 'Имя формы.' }]);

// let tagOption = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{ titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
// {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.' }, {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.' }]);

// let tagSelect = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.', [{ titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.' },
// {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'}, {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.' }]);

// console.log(tagA);  
// console.log(tagDiv);  
// console.log(tagH1);  
// console.log(tagSpan);  
// console.log(tagInput);  
// console.log(tagForm);  
// console.log(tagOption);  
// console.log(tagSelect);  


// -  Створити класс  для об'єкту який описує теги

// class Tag {
//     constructor(name, action, attrs){
//         this.titleOfTag = name;
//         this.tagAction = action;
//         this.attrs = attrs;
//     }
// }

// let tagA = new Tag('a', 'Тег <a> предназначен для создания ссылок', [{ titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.' },
// { titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.' }, { titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.' }]);

// let tagDiv = new Tag('div', 'Тег <div> предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{ titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' },
// { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' }]);

// let tagH1 = new Tag('h1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня', [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.' }]);

// let tagSpan = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа.', [{ titleOfAttr: 'style', actionOfAttr: 'Применяется для определения стиля элемента с помощью правил CSS.' },
// { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' }]);

// let tagInput = new Tag('input', 'Тег <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', [{ titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.' },
// { titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.' }, { titleOfAttr: 'placeholder', actionOfAttr: 'Выводит подсказывающий текст.' }]);

// let tagForm = new Tag('form', 'Тег <form> устанавливает форму на веб-странице.', [{ titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы' },
// { titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.' }, { titleOfAttr: 'name', actionOfAttr: 'Имя формы.' }]);

// let tagOption = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{ titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.' },
// { titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.' }, { titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.' }]);

// let tagSelect = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.', [{ titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.' },
// { titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.' }, { titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.' }]);

// console.log(tagA);
// console.log(tagDiv);
// console.log(tagH1);
// console.log(tagSpan);
// console.log(tagInput);
// console.log(tagForm);
// console.log(tagOption);
// console.log(tagSelect);  

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об'єкт функції:


// class Car {
//     constructor(manufacturer, modelYear, maxSpeed, engine) {
//         this.manufacturer = manufacturer;
//         this.modelYear = modelYear;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю  ${this.maxSpeed} на годину`);
//     }
//     info() {
//         console.log(this);
//     }
//     increaseMaxSpeed(newSpeed = 300) {
//         this.maxSpeed = newSpeed;
//     }
//     changeYear(newValue = 2017) {
//         this.modelYear = newValue;
//     }
//     addDriver(driver = {name : 'Alex', age : 25, car : true}) {
//         this.driver = driver;
//     } 
// }

// let mustang = new Car('Ford', 1965, 250, 3.3);
// console.log(mustang);

// mustang.drive();
// mustang.info();
// mustang.increaseMaxSpeed();
// mustang.changeYear();
// mustang.addDriver();
// console.log(mustang);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об'єкт функції:

// function Car(manufacturer, modelYear, maxSpeed, engine) {
//     this.manufacturer = manufacturer;
//     this.modelYear = modelYear;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю  ${this.maxSpeed} на годину`);
//     }
//     this.info = function () {
//         console.log(this);
//     }
//     this.increaseMaxSpeed = function (newSpeed = 300) {
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function (newValue = 2017) {
//         this.modelYear = newValue;
//     }
//     this.addDriver = function (driver = { name: 'Alex', age: 25, car: true }) {
//         this.driver = driver;
//     }
// }

// let mustang = new Car('Ford', 1965, 250, 3.3);
// console.log(mustang);

// mustang.drive();
// mustang.info();
// mustang.increaseMaxSpeed();
// mustang.changeYear();
// mustang.addDriver();
// console.log(mustang);

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об'єкт функції:

// let car =  {
//     manufacturer : 'Ford',
//     modelYear : 1996,
//     maxSpeed : 250,
//     engine : 2.7,
//     driver : null,
//     drive : function () {
//         console.log(`їдемо зі швидкістю  ${this.maxSpeed} на годину`);
//     },
//     info : function () {
//         console.log(`
//         manufacturer : ${this.manufacturer}
//         modelYear : ${this.modelYear}
//         maxSpeed : ${this.maxSpeed}
//         engine : ${this.engine}
//         `);
//     },
//     increaseMaxSpeed : function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//     changeYear : function (newValue) {
//         this.modelYear = newValue;
//     },
//     addDriver : function (driver) {
//         this.driver = driver;
//     }
// };

// let driver = { name: 'Alex', age: 25, car: true };

// car.drive();
// console.log(car);
// car.increaseMaxSpeed(300);
// console.log(car);
// car.changeYear(2020);
// console.log(car);
// car.addDriver(driver);
// console.log(car);
// car.info();
// console.log(car);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги

// class Human {
//     constructor(name, age) {
//        this.name = name;
//        this.age = age; 
//     }
// }

// class Cinderella  extends Human {
//     constructor(name, age, sizeFoot) {
//         super(name, age);
//         this.sizeFoot = sizeFoot;
//     }
// }
    
// class Prince extends Human{
//     constructor(name, age, shoeSize){
//         super(name, age);
//         this.shoeSize = shoeSize;
//     }
//     findPrincess (array) {
//         for (const item of array) {    
//            if(item.sizeFoot === this.shoeSize) 
//            console.log('My Princess is ' + item.name);            
//         } 
//     }

// };
        

// let prince1 = new Prince('Charming', 26, 35);

// let princess1 = new Cinderella('Aurora', 16, 36.5);
// let princess2 = new Cinderella('Ariel', 18, 35);
// let princess3 = new Cinderella('Belle', 22, 37);
// let princess4 = new Cinderella('Jasmine', 24, 38.5);
// let princess5 = new Cinderella('Pocahontas', 19, 39.5);
// let princess6 = new Cinderella('Mulan', 25, 37.5);
// let princess7 = new Cinderella('Rapunzel', 20, 36);
// let princess8 = new Cinderella('Merida', 23, 38);
// let princess9 = new Cinderella('Moana', 21, 39);
// let princess10 = new Cinderella('Tiana', 27, 40);

// let arrayPrincess = [princess1, princess2, princess3, princess4, princess5, princess6, princess7, princess8, princess9, princess10];

// prince1.findPrincess(arrayPrincess);
// console.log(prince1);



// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги

// function Cinderella (name, age, sizeFoot) {
//     this.name = name;
//     this.age = age; 
//     this.sizeFoot = sizeFoot;
// }

// let princess1 = new Cinderella('Aurora', 16, 36.5);
// let princess2 = new Cinderella('Ariel', 18, 35);
// let princess3 = new Cinderella('Belle', 22, 37);
// let princess4 = new Cinderella('Jasmine', 24, 38.5);
// let princess5 = new Cinderella('Pocahontas', 19, 39.5);
// let princess6 = new Cinderella('Mulan', 25, 37.5);
// let princess7 = new Cinderella('Rapunzel', 20, 36);
// let princess8 = new Cinderella('Merida', 23, 38);
// let princess9 = new Cinderella('Moana', 21, 39);
// let princess10 = new Cinderella('Tiana', 27, 40);

// let arrayPrincess = [princess1, princess2, princess3, princess4, princess5, princess6, princess7, princess8, princess9, princess10];

// function Prince (name, age, shoeSize) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
//     this.findPrincess = function (array) {
//         for (const item of array) {    
//             if (item.sizeFoot === this.shoeSize)
//             console.log('My princess is ' + item.name);     
//         }
//     }
// };

// let prince1 = new Prince('Charming', 26, 35);

// prince1.findPrincess(arrayPrincess)
// console.log(prince1);