/* Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль. */

let arrExp = [5,20,'Hello',-3,0,21,119,2048,7,-12];
    console.log('Count elements massive: ' + arrExp.length);
    console.log(arrExp);

/* Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre. */

let myBooks = {
        title: '',
        pageCount: 0,
        genre: '',
    }

console.log(myBooks);

/* Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
   Поле "автори" - являється  масивом.Кожен автор має поля name та age.
*/

let books = {
        title: '',
        pageCount: 0,
        genre: '',
        authors: [
            {name: 'Artem', age: 34},
            {name: 'Mykola', age: 25},
        ]
    }

console.log(books);

/* Створити масив з 10 об'єктами які описують сутніть "користувач".
   Поля: name, username,password.
   Вивести в консоль пароль кожного користувача
*/

let user = [
    {name: 'name_1', username: 'username_1', password: '32423GSWedfg!'},
    {name: 'name_2', username: 'username_2', password: '43!@CFDseeQ'},
    {name: 'name_3', username: 'username_3', password: '(IJN$RFVedec'},
    {name: 'name_4', username: 'username_4', password: '<JHFD#2w1Xde44'},
    {name: 'name_5', username: 'username_5', password: '(IJNV%XGBS0QP;'},
    {name: 'name_6', username: 'username_6', password: '%TGFDX&UJlrf9('},
    {name: 'name_7', username: 'username_7', password: '!@WWS#fdf4476%h'},
    {name: 'name_8', username: 'username_8', password: 'CVZge&^5FGDSS#r454'},
    {name: 'name_9', username: 'username_9', password: ')OKM>?=9junewr32A'},
    {name: 'name_10', username: 'username_10', password: 'Z<M&jj55#EDSW'},
]

for(let listPwd of user){
    console.log(listPwd['password']);
}

/* Є змінна х, якій ви надаєте довільне числове значення.
   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
   Перевірте  скрипт при a, що дорівнює 1, 0, -3.
*/

let x = +prompt('Введіть довільне число: ');
    if(x !== 0){
        console.log('Вірно');
    }else {
        console.log('Невірно');
    }

/*
    Дано змінну time яка рівна числу від 0 до 59.
    Потрібно написати код, який перевірить, до якої четверті години попадає число
    (в першу, другу, третю или четверту частину години).
*/

let minutes = +prompt('Введіть хвилини: ');
    if(minutes > 0 && minutes <= 59){
        if(minutes > 0 && minutes <= 15){
            console.log('Перша частина години: ' + minutes + ' хв.');
        }
        else if(minutes > 15 && minutes <= 30){
            console.log('Друга частина години: ' + minutes + ' хв.');
        }
        else if(minutes > 30 && minutes <= 45){
            console.log('Третя частина години: ' + minutes + ' хв.');
        }
        else if(minutes > 45 && minutes <= 59){
            console.log('Четверта частина години: ' + minutes + ' хв.');
        }
    }else {
        console.log('Ви перевищили діапазон 0-59 хв');
    }


/*
    У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
    (у першу, другу чи третю).
*/

let day = +prompt('Введіть дату від 1 до 31: ');
    if(day > 1 && day <= 31){
        if(day > 1 && day <=  10){
            console.log('Перша декада місяця: ' + day);
        }else if(day > 10 && day <= 20){
            console.log('Друга декада місяця: ' + day);
        }else if(day > 20 && day < 31){
            console.log('Третя декада місяця: ' + day);
        }
    }else {
        console.log('Ви перевищили діапазон дат від 1 до 31');
    }

/*
    Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
    відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
*/

let dayWeek = +prompt('Введіть день тижня числом від 1 до 7: ');
    if(dayWeek <= 7){
        switch (dayWeek) {
            case 1:
                console.log('Понеділок');
                break;
            case 2:
                console.log('Вівторок');
                break;
            case 3:
                console.log('Середа');
                break;
            case 4:
                console.log('Четвер');
                break;
            case 5:
                console.log('П"ятниця');
                break;
            case 6:
                console.log('Субота');
                break;
            case 7:
                console.log('Неділя');
                break;
            default:
            console.log('Невірний діапазон дат');
        }
    }else{
        console.log('Невірно заданий день тижня (від 1 до 7)');
    }

/*
    Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох.
    Також потрібно врахувати коли введені рівні числа.
*/

let a = 10;
    b = 10;
    if(a > b){
        console.log('Число a > b: ' + a);
    }else if(a === b){
        console.log(a + ' = ' + b);
    }else{
        console.log('Число b > a: ' + b);
    }

/*
    Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
    Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
    якщо значення змінної х являється false (хибноподібні, тобто приводиться до false)
*/

let y = undefined;
    y = y || 'hello';
    console.log(y);

/*
    З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
    За допомоги іф перевірити кожен його елемент на тривалість навчання.
    У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

    for(let listDuration of coursesAndDurationArray){
        if(listDuration['monthDuration'] > 5){
            console.log(listDuration['title'] + ' ' + listDuration['monthDuration'] + ' місяців' + ' Супер');
        }
    }