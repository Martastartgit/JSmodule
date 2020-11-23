// function myDay(time, callback) {
//     console.log('Зійшло сонце');
//     console.log('Продзвенів будильник');
//     setTimeout(() => {
//         console.log('Прокинулась і я');
//         if(time){
//             callback(null, 'Я не проспала');
//             return
//         }
//         callback('Я проспала', null)


//     }, 2500);

// }

// function whatToWear(clothes, cb) {
//     console.log('Що сьогодні одягнути?');
//     setTimeout(() => {
//         if(clothes){
//             cb(null, '')
//             return


//         }
//         cb('Не має що одіти', null)

//     }, 1200);
// }

// function getToWork(bus, cb){
//     console.log('Місія встигнути на маршрутку');
//     setTimeout(() => {
//         if(bus) {
//             cb(null, 'Їду на маршрутці');
//             return
//         }
//         cb('Маршрутка не їде', null)


//     }, 1500);

// }

// function lateOrNot(param, cb) {
//     console.log('Невже знову запізнилася');
//     setTimeout(() => {
//         console.log('Таки запізнилася');
//         if(param) {
//             cb(null, 'Начальник не помітив');
//             return
//         }
//         cb('Начальник помітив', null)

//     }, 700);

// }

// function guessWord(word, cb){
//     console.log(word);
//     setTimeout(() => {  
//        console.log('Що сказав начальник?');
//         if(typeof word === 'string')  {
//             cb(null, [...word].reverse().join(''));
//             return
//         }
//         cb('Програли вікторину', null)

//     }, 500);
// }


// function ifBossHappy(boss, cb) {
//     console.log('Як же не хочеться сидіти до кінця робочого дня');
//     setTimeout(() => {
//         if(boss === 'happy') {
//             cb(null, 'Бос сьогодні добрий');
//             return
//         }
//         cb('Бос сьогодні злий', null)

//     }, 2000);

// }

// function whatDoAfterWork(money, cb) {
//     console.log('ЩО ж робити після роботи?');
//     setTimeout(() => {
//         if(money > 100) {
//             cb(null, 'Піду в кінотеатр');
//             return
//         }
//         cb('Читатиму книгу вдома', null)

//     }, 900);

// }

// function whatFilmToChoose(genre, cb) {
//     console.log('Що крутять в кінотеатрі?');
//     setTimeout(() => {
//         if(genre === 'horror') {
//             cb(null, 'ужастік');
//             return
//         }
//         cb('Не люблю мелодрам', null)

//     }, 300);    

// }

// function lesson(wisdom, cb) {
//     console.log('Настав час дивитися лекції!!');
//     setTimeout(() => {
//         if(wisdom) {
//             cb(null, 'Ура!Я зрозуміла все');
//             return
//         }
//         cb('Я не зрозуміла нічого', null)
//     }, 1000);

// }

// function timeToSleep(cb) {
//     cb(null, 'Настав час спати')

// }

// myDay(true, (err, data) => {

//     if (err) {
//         console.log(`${err} роботу, вже можна і не вставати`);
//         return
//     }
//     console.log(`${data}. Повезло, можна зробити макіяж)`);

//     whatToWear(true, (err, data)=>{
//         if(err){
//             console.log(err);
//             return
//         }
//         let clothes = ['Сукня','Костюм','Спідниця','Спортивний костюм','Джинси'];
//         console.log(clothes[Math.floor(clothes.length * Math.random())]);


//         getToWork(true, (err, data) => {
//             if(err) {
//                 console.log(`${err} , у неї відлетіло колесо`);
//                 return
//             }
//             console.log(`Встигла. ${data}`);

//             lateOrNot(true,(err, data) => {
//                 if(err) {
//                     console.log(`${err}. Мене звільнено`);
//                     return
//                 }
//                 console.log(data);

//                 guessWord('!ясйюнзіпсеН', (err, data) => {
//                     if (err) {
//                         console.log(err);
//                         return
//                     }  
//                     console.log(data);  

//                     ifBossHappy('happy', (err, data) => {
//                         if(err) {
//                             console.log(`${err}не відпрошусь пошвидше`);
//                             return
//                         }
//                         console.log(`${data},відпрошусь`);

//                         whatDoAfterWork(150, (err, data) => {
//                             if (err) {
//                                 console.log(`Все протратила! ${err}`);
//                                 return
//                             }
//                             console.log(data);

//                             whatFilmToChoose('horror', (err, data) => {
//                                 if(err || data === 'мелодрама') {
//                                     console.log('Краще сидітиму вдома. Не люблю мелодрам');
//                                     return
//                                 }
//                                 console.log(`${data}, люблю фільми ужасів`);

//                                 lesson( true, (err, data) => {
//                                     if(err) {
//                                         console.log(`${err}.Прийдеться переглядати декілька разів до ранку`);
//                                         return

//                                     }
//                                     console.log(`${data} але всерівно ще раз гляну `);

//                                     timeToSleep((err, data) => {
//                                         console.log(`${data}.Спокійної ночі`);
//                                     });

//                                 });

//                             });

//                         });

//                     });

//                 });

//             });

//         });

//     });

// });

// function myDay(time) {
//     return new Promise((resolve, reject) => {
//         console.log('Зійшло сонце');
//         console.log('Продзвенів будильник');
//         setTimeout(() => {
//             console.log('Прокинулась і я');
//             if (time) {
//                 resolve('Я не проспала');

//             }
//             reject('Я проспала');
//         }, 2500);
//     })
// }

// function whatToWear(clothes) {
//     return new Promise((resolve, reject) => {
//         console.log('Що сьогодні одягнути?');
//         setTimeout(() => {
//             if (clothes) {
//                 let cloth = ['Сукня', 'Костюм', 'Спідниця', 'Спортивний костюм', 'Джинси'];
//                 resolve(cloth[Math.floor(cloth.length * Math.random())])

//             }
//             reject('Не має що одіти');

//         }, 1200);

//     })

// }

// function getToWork(bus) {
//     return new Promise((resolve, reject) => {
//         console.log('Місія встигнути на маршрутку');
//         setTimeout(() => {
//             if (bus) {
//                 resolve('Їду на маршрутці');
//             }
//             reject('Маршрутка не їде');

//         }, 1500);

//     })


// }

// function lateOrNot(param) {
//     return new Promise((resolve, reject) => {
//         console.log('Невже знову запізнилася');
//         setTimeout(() => {
//             console.log('Таки запізнилася');
//             if (param) {
//                 resolve('Начальник не помітив')

//             }
//             reject('Начальник помітив');

//         }, 700);

//     })

// }

// function guessWord(word) {
//     return new Promise((resolve, reject) => {
//         console.log(word);
//         setTimeout(() => {
//             console.log('Що сказав начальник?');
//             if (typeof word === 'string') {
//                 resolve([...word].reverse().join(''));
//             }
//             reject('Програли вікторину');

//         }, 500);

//     })

// }

// function ifBossHappy(boss) {
//     return new Promise((resolve, reject) => {
//         console.log('Як же не хочеться сидіти до кінця робочого дня');
//         setTimeout(() => {
//             if (boss === 'happy') {
//                 resolve('Бос сьогодні добрий')
//             }
//             reject('Бос сьогодні злий');

//         }, 2000);
//     })

// }

// function whatDoAfterWork(money) {
//     return new Promise((resolve, reject) => {
//         console.log('ЩО ж робити після роботи?');
//         setTimeout(() => {
//             if (money > 100) {
//                 resolve('Піду в кінотеатр')
//             }
//             reject('Читатиму книгу вдома')

//         }, 900);
//     })


// }

// function whatFilmToChoose(genre) {
//     return new Promise((resolve, reject) => {
//         console.log('Що крутять в кінотеатрі?');
//         setTimeout(() => {
//             if (genre === 'horror') {
//                 resolve('ужастік')
//             }
//             reject('Не люблю мелодрам')

//         }, 300);
//     })


// }

// function lesson(wisdom) {
//     return new Promise((resolve, reject) => {
//         console.log('Настав час дивитися лекції!!');
//         setTimeout(() => {
//             if (wisdom) {
//                 resolve('Ура!Я зрозуміла все')
//             }
//             reject('Я не зрозуміла нічого')
//         }, 1000);
//     })

// }

// function timeToSleep() {
//     return new Promise((resolve) => {
//         resolve('Настав час спати')
//     })
// }


// myDay(true)
//     .then((data) => {
//         console.log(data);
//         return whatToWear(true);
//     })
//     .then((clothes) => {
//         console.log(clothes);
//         return getToWork(true)
//     })
//     .then((data) => {
//         console.log(data);
//         return lateOrNot(true);
//     })
//     .then((data) => {
//         console.log(data);
        // return guessWord('!ясйюнзіпсеН')
//     })
//     .then((word) => {
//         console.log(word);
//         return ifBossHappy('happy');
//     })
//     .then((happy) => {
//         console.log(happy);
//         return whatDoAfterWork(150);
//     })
//     .then((cinema) => {
//         console.log(cinema);
//         return whatFilmToChoose('horror')
//     })
//     .then((film) => {
//         console.log(film);
//         return lesson(true)
//     })
//     .then((lesson) => {
//         console.log(lesson);
//         return timeToSleep()
//     })
//     .then((sleep) => {
//         console.log(sleep);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log('FINAL');
//     })
// _______________________________________________________________________________________

// async function asunc() {
//     const day = await myDay(true);
//     console.log(day);
//     const clothes =  await whatToWear(true);
//     console.log(clothes);
//     const work = await getToWork(true);
//     console.log(work);
//     const late = await lateOrNot(true);
//     console.log(late);
//     const word = await guessWord('!ясйюнзіпсеН');
//     console.log(word);
//     const happy = await ifBossHappy('happy');
//     console.log(happy);
//     const after = await whatDoAfterWork(150);
//     console.log(after);
//     const film = await whatFilmToChoose('horror');
//     console.log(film);
//     const course = await lesson(true);
//     console.log(course);
//     const sleep = await timeToSleep();
//     console.log(sleep);
// }
// asunc()