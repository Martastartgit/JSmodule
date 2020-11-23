
// Реалізувати друкарську машинку.
// У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 



let str = 'Hello Word!';
let arr = [...str];
    
function wait() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 100));
    
}

async function asuc(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        await wait(element);
        document.write(element)
        
    }
}
asuc(arr)