/**
 * Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
 */

    function squareRectangle(a,b){
        // S = a * b
        return (a*b);
    }

    console.log('Площа прямокутника S = a * b -> ' + squareRectangle(5,8));

/**
 * Створити функцію яка обчислює та повертає площу кола з радіусом R (S = pi * R^2)
 */

    function squareCircle(circle_radius){
        const p = 3.14;
        return (p * circle_radius);
    }

    console.log('Площа кола з радіусом S = π * r^2 -> ' + squareCircle(2));

/**
 * Створити функцію яка обчислює та повертає площу циліндру висотою h та радіусом r (S=2πr(h+r))
  */

    function squareCylinder(h,r){
        const p = 3.14;
        return (2 * p * r * (h + r));
    }

    console.log('Площа циліндра S = 2πr(h+r) -> ' + squareCylinder(2,1));

/**
 * Створити функцію яка приймає масив та виводить кожен його елемент
 */

    function getItemsArray(array){
        for(itemArray of array){
            console.log(itemArray);
        }
    }

        let mas = [30,'home',89,-10];
        getItemsArray(mas);

/**
 * Створити функцію яка створює параграф з текстом. Текст задати через аргумент
 */

    function addParagraphText(text_value){
        return `<p>${text_value}</p>`;
    }

    document.write(addParagraphText('Example 1 text'));
    document.write(addParagraphText('Example 2 text'));

/**
 * Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 */

    function addItemsList(li_value){
        return `<ul>
                    <li>${li_value}</li>
                    <li>${li_value}</li>
                    <li>${li_value}</li>
                </ul>`;
    }

    document.write(addItemsList('Lorem ipsum'));

/**
 * Cтворити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
 * Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
 */

    function addDynamicItemsList(value_text, count){
        document.write(`<ul>`);
            for(let i = 0; i < count; i++){
                document.write(`<li>${value_text}</li>`);
            }
        document.write(`</ul>`);
    }

    addDynamicItemsList('Text', 3);

/**
 * Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
 */

    function arrayItemsBuildList(arr_){
        document.write(`<ul>`);
            for(arrItem of arr_){
                document.write(`<li>${arrItem}</li>`);
            }
        document.write(`</ul>`);
    }

    let arrData = [4,5,true,'lorem'];
    arrayItemsBuildList(arrData);

/**
 *  Створити функцію яка приймає масив об'єктів з наступними полями id,name,age та виводить їх в документ.
 *  Для кожного об'єкту окремий блок.
 */

    function getArrayObjects(array_obj){
        for(objItem of array_obj){
            document.write(`<div>${objItem.id} ${objItem.name} ${objItem.age}</div>`);
        }
    }

        let j = [
            {id: 1, name: 'Artem', age: 34},
            {id: 2, name: 'Marina', age: 26},
            {id: 3, name: 'Vova', age: 32},
        ]

    getArrayObjects(j);

/**
 * Створити функцію яка повертає найменьше число з масиву
 */

    function minValueOfArray(...arrVal){
        let min = 0;
        for(let i = 0; i < arrVal.length; i++){
            if(arrVal[i] < arrVal[0]){
                arrVal[0] = arrVal[i];
                min = arrVal[0];
            }
        }
        console.log(min);
    }

    minValueOfArray(5,6,-19,21);

/**
 * Створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
 * Приклад sum([1,2,10]) //->13
 */

    function sumArrayOfNumbers(...sumArrayNum){
        let sumResult = 0;
        for(let i = 0; i < sumArrayNum.length; i++){
            sumResult += sumArrayNum[i];
        }
        return sumResult;
    }

    console.log(sumArrayOfNumbers(1,27,-3));

/**
 * Створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
 * Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
 */

    function replaceItemOfArray(arr,index1,index2){
        let tempItem = arr[index1];

            arr.splice(index1, index2);
            arr.splice(index2, index1, tempItem);

            for(itemArr of arr){
                console.log(itemArr);
            }
    }

    replaceItemOfArray([11,22,33,44],0,1);

/**
 * Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
 * Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
 */

    function exchange(sumUAH,currencyValues,exchangeCurrency){
        let cash = [
            {currency: currencyValues, value: exchangeCurrency}
        ]
             return parseInt(sumUAH / exchangeCurrency);
    }

    console.log(exchange(10000,'USD',40));
    console.log(exchange(10000,'EUR',42));