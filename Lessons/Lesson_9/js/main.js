/**
 * - створити блок,
 * - додати йому класи wrap, collapse, alpha, beta
 * - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
 * - додати цей блок в body.
 * - клонувати його повністю, та додати клон в body.
 */

    const myBlock = document.createElement('div');
        myBlock.classList.add('wrap','collapse','alpha','beta');
        myBlock.innerText = 'My Text';
    document.body.appendChild(myBlock);

    clone = myBlock.cloneNode(true);
    document.body.appendChild(clone);

/**
 * Є масив:
 * ['Main','Products','About us','Contacts']
 * Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
 */

    const arrProducts = ['Main','Products','About us','Contacts'];

        ul = document.createElement('ul');
        document.body.appendChild(ul);

        for (const arrProduct of arrProducts) {
            const li = document.createElement('li');
                li.innerText = arrProduct;
                ul.append(li);
        }

/**
 * Є масив
 * let coursesAndDurationArray = [
 *     {title: 'JavaScript Complex', monthDuration: 5},
 *     {title: 'Java Complex', monthDuration: 6},
 *     {title: 'Python Complex', monthDuration: 6},
 *     {title: 'QA Complex', monthDuration: 4},
 *     {title: 'FullStack', monthDuration: 7},
 *     {title: 'Frontend', monthDuration: 4}
 * ];
 * Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
 * Завдання робити через цикли.
 */

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    for (const itemOfCourses of coursesAndDurationArray) {
        const infoBlock = document.createElement('div');
        infoBlock.innerText = itemOfCourses['title'] + ' ' + itemOfCourses['monthDuration'];
        document.body.append(infoBlock);
    }

/**
 * Є масив
 * let coursesAndDurationArray = [
 *     {title: 'JavaScript Complex', monthDuration: 5},
 *     {title: 'Java Complex', monthDuration: 6},
 *     {title: 'Python Complex', monthDuration: 6},
 *     {title: 'QA Complex', monthDuration: 4},
 *     {title: 'FullStack', monthDuration: 7},
 *     {title: 'Frontend', monthDuration: 4}
 * ];
 *
 *
 * За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
 * в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
 * Завдання робити через цикли.
 */

    let coursesDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    function createElementsAddClasses(tag, attr){
        const item = document.createElement(tag);
        item.classList.add(attr);
        return item;
    }

    for (const coursesElement of coursesDurationArray) {
        const divItem = createElementsAddClasses('div','item');

        h1 = createElementsAddClasses('h1','heading');
        p = createElementsAddClasses('p','description');

        h1.innerText = coursesElement['title'];
        p.innerText = coursesElement['monthDuration'];

        divItem.append(h1,p);

        document.body.append(divItem);
    }

/**
 *  Є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
 *  Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
 *  Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
 */

    let simpsons = [
        {
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних ' +
                'героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. ' +
                'У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього ' +
                'учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». ' +
                'Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. ' +
                'Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
            photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — ' +
                'постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно ' +
                'носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на ' +
                'оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую ' +
                'причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит ' +
                'в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской ' +
                'домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. ' +
                'Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, ' +
                'особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            name: 'Lisa',
            surname: 'Simpson',
            age: 9,
            info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». ' +
                'Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего ' +
                'своим умом и рассудительностью.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            name: 'Maggie',
            surname: 'Simpson',
            age: 1,
            info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала ' +
                '«Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night ' +
                '(англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, ' +
                'пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления ' +
                'в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, ' +
                'дебют произошёл 17 декабря 1989 года.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        },
    ];

    for (let singleOfFamily of simpsons) {
        let member = document.createElement('div');
            member.classList.add('member');
            member.innerHTML = `<h2>${singleOfFamily.name} ${singleOfFamily.surname}</h2> 
                                <strong>${singleOfFamily.age}</strong>
                                <p>${singleOfFamily.info}</p>
                                <img src="${singleOfFamily.photo}"></img>`;
            document.body.append(member);
    }

/**
 *  Цикл в циклі
 * - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
 *
 * Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
 * окремих властивостей, для властивості modules зробити список з елементами
 * Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
 */

    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

    for (let element of coursesArray) {
        let singleObj = createElementsAddClasses('div','courses');
            infoTitle = createElementsAddClasses('h3','title');
            infoMonthDur = createElementsAddClasses('h4','month-duration');
            infoHourDur = createElementsAddClasses('h5','hour-duration');
            infoModules = createElementsAddClasses('ul','modules');

            infoTitle.innerText = element.title;
            infoMonthDur.innerText = element.monthDuration;
            infoHourDur.innerText = element.hourDuration;

            for (let singleElement of element.modules) {
                let listModules = createElementsAddClasses('li','item');
                    infoModules.append(listModules);
                    listModules.innerText = singleElement;
            }

            singleObj.append(infoTitle,infoMonthDur,infoHourDur,infoModules);

            document.body.append(singleObj);
    }


/**
 *  Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
 *  натисканні на кнопку зникав елемент з id="text".
 */

    let shadowBlock = document.createElement('div');
        shadowBlock.setAttribute('id','text');
        shadowBlock.innerText = 'test';

        buttonHide = document.createElement('button');
        buttonHide.setAttribute('class','action-hidden');
        buttonHide.setAttribute('type','submit');
        buttonHide.innerText = 'Send';

        document.body.append(shadowBlock);
        document.body.append(buttonHide);

        buttonHide.onclick = function (){
            shadowBlock.setAttribute('style','display:none');
        }
        

/**
 *  Створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
 *  з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
 */

    let formAge = document.createElement('form');
        formAge.setAttribute('name','formUserAge');

        inputAgeHuman = document.createElement('input');
        inputAgeHuman.setAttribute('name','age-human');

        buttonSubmit = document.createElement('button');
        buttonSubmit.innerText = 'Check';

        document.body.appendChild(formAge);
        formAge.append(inputAgeHuman,buttonSubmit);

        formAge.onsubmit = function (e){
            e.preventDefault();
            let userAge = document.forms['formUserAge']['age-human'].value;
            if(userAge < 18){
                console.log(`Вам менше 18 років! Ваш вік - ${userAge}`);
            }else{
                console.log(`Ви повнолітній: Ваш вік - ${userAge}`);
            }
        }


