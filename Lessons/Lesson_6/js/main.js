/**
 *  Знайти та вивести довижину настипних стрінгових значень: 'hello world', 'lorem ipsum', 'javascript is cool'
 */

    console.log('Length of "hello world" : ' + ('hello world').length + ' symbols');
    console.log('Length of "lorem ipsum" : ' + ('lorem ipsum').length + ' symbols');
    console.log('Length of "javascript is cool" : ' + ('javascript is cool').length + ' symbols');

/**
 *  Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
 */

    console.log(('hello world').toLocaleUpperCase());
    console.log(('lorem ipsum').toLocaleUpperCase());
    console.log(('javascript is cool').toLocaleUpperCase());

/**
 *  Перевести до нижнього регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
 */

    console.log(('HELLO WORLD').toLocaleLowerCase());
    console.log(('LOREM IPSUM').toLocaleLowerCase());
    console.log(('JAVASCRIPT IS COOL').toLocaleLowerCase());

/**
 *  Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів
 */

    let str_clear = ' dirty string   ';
    console.log(str_clear.replace(/ /g,''));

/**
 *  Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
        let str = 'Ревуть воли як ясла повні';
        let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
 */

    function stringToArray(str) {
        return str.split(" ");
    }

    let str_exp = 'Ревуть воли як ясла повні';
    console.log(stringToArray(str_exp));