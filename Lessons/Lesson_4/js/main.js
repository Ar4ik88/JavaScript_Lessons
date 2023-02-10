/*
    Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/

    function squareRectangle(a,b){
        // S = a * b
        return (a*b);
    }

        console.log('Площа прямокутника S = a * b -> ' + squareRectangle(5,8));

/*
    Створити функцію яка обчислює та повертає площу кола з радіусом R
*/

    function squareCircle(circle_radius){
        // S = pi * R^2
        return 3,14 * circle_radius;
    }

        console.log('Площа кола з радіусом S = Pi * R^2 -> ' + squareCircle(2));

/*
    Створити функцію яка приймає масив та виводить кожен його елемент
*/

    function getItemsArray(array){
        for(itemArray of array){
            console.log(itemArray);
        }
    }

        let mas = [30,'home',89,-10];
        getItemsArray(mas);

/*
    Створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/

    function addParagraphText(text_value){
        return `<p>${text_value}</p>`;
    }

        document.write(addParagraphText('Example 1 text'));
        document.write(addParagraphText('Example 2 text'));

/*
    Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/

    function addItemsList(li_value){
        return `<ul>
                    <li>${li_value}</li>
                    <li>${li_value}</li>
                    <li>${li_value}</li>
                </ul>`;
    }

        document.write(addItemsList('Lorem ipsum'));

/*
    Cтворити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/

    function addDynamicItemsList(value_text, count){
        `<ul>`
            for(let i = 0; i < count; i++){
                document.write(`<li>${value_text}</li>`);
            }
        `</ul>`;
    }

        addDynamicItemsList('Text', 3);

/*
    Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/

