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

/**
 *  Є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові
 */

    let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
    let arrStr = arrNum.map(String);
    console.log(arrStr);

/**
 *  Створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або
 *  навпаки в залежності від значення аргументу direction.
 *  let nums = [11,21,3];
 *  sortNums(nums,'ascending') // [3,11,21]
 *  sortNums(nums,'descending') // [21,11,3]
 */

    let nums = [11,21,3];

    function sortNums(nums,direction){
        if(direction === 'ascending'){
            return nums.sort((a,b) => a-b);
        }
        if(direction === 'descending'){
            return nums.sort((a,b) => b-a);
        }
    }

    console.log(sortNums(nums,'ascending'));

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
 *  -- відсортувати його за спаданням за monthDuration
 *  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 *  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 */

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    /* Сортування за спаданням */
    let sortDescMonth = coursesAndDurationArray.sort(
        (m1,m2) => {
            return m2.monthDuration - m1.monthDuration;
        }
    )
        console.log(sortDescMonth);

    /* Відфільтровані курси з тривалістю більше 5 місяців */
    let filteredMonth = coursesAndDurationArray.filter((course) => {
        return course.monthDuration > 5;
    });
        console.log(filteredMonth);

/**
 *  За допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 */

    let changerObjects = coursesAndDurationArray.map((key,index) => (
        {id: index + 1, title: key.title, monthDuration: key.monthDuration}
    ));
    console.log(changerObjects);

/**
 *  описати колоду карт (від 6 до туза без джокерів)
 *  - знайти піковий туз
 *  - всі шістки
 *  - всі червоні карти
 *  - всі буби
 *  - всі трефи від 9 та більше
 *
 * {
 *     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
 *     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
 *     color:'', // 'red','black'
 * }
 */

    let cards = [
        {cardSuit: 'spade', value: '6', color: 'red'},
        {cardSuit: 'spade', value: '7', color: 'red'},
        {cardSuit: 'spade', value: '8', color: 'red'},
        {cardSuit: 'spade', value: '9', color: 'red'},
        {cardSuit: 'spade', value: '10', color: 'red'},
        {cardSuit: 'spade', value: 'jack', color: 'red'},
        {cardSuit: 'spade', value: 'joker', color: 'red'},
        {cardSuit: 'spade', value: 'queen', color: 'red'},
        {cardSuit: 'spade', value: 'king', color: 'red'},
        {cardSuit: 'spade', value: 'ace', color: 'red'},
        {cardSuit: 'heart', value: '6', color: 'red'},
        {cardSuit: 'heart', value: '7', color: 'red'},
        {cardSuit: 'heart', value: '8', color: 'red'},
        {cardSuit: 'heart', value: '9', color: 'red'},
        {cardSuit: 'heart', value: '10', color: 'red'},
        {cardSuit: 'heart', value: 'jack', color: 'red'},
        {cardSuit: 'heart', value: 'joker', color: 'red'},
        {cardSuit: 'heart', value: 'queen', color: 'red'},
        {cardSuit: 'heart', value: 'king', color: 'red'},
        {cardSuit: 'heart', value: 'ace', color: 'red'},
        {cardSuit: 'diamond', value: '6', color: 'black'},
        {cardSuit: 'diamond', value: '7', color: 'black'},
        {cardSuit: 'diamond', value: '8', color: 'black'},
        {cardSuit: 'diamond', value: '9', color: 'black'},
        {cardSuit: 'diamond', value: '10', color: 'black'},
        {cardSuit: 'diamond', value: 'jack', color: 'black'},
        {cardSuit: 'diamond', value: 'joker', color: 'black'},
        {cardSuit: 'diamond', value: 'queen', color: 'black'},
        {cardSuit: 'diamond', value: 'king', color: 'black'},
        {cardSuit: 'diamond', value: 'ace', color: 'black'},
        {cardSuit: 'clubs', value: '6', color: 'black'},
        {cardSuit: 'clubs', value: '7', color: 'black'},
        {cardSuit: 'clubs', value: '8', color: 'black'},
        {cardSuit: 'clubs', value: '9', color: 'black'},
        {cardSuit: 'clubs', value: '10', color: 'black'},
        {cardSuit: 'clubs', value: 'jack', color: 'black'},
        {cardSuit: 'clubs', value: 'joker', color: 'black'},
        {cardSuit: 'clubs', value: 'queen', color: 'black'},
        {cardSuit: 'clubs', value: 'king', color: 'black'},
        {cardSuit: 'clubs', value: 'ace', color: 'black'}
    ];

    /* Пошук пікового туза */
    let findAceDiamond = cards.filter(card => card.cardSuit === 'diamond' && card.value === 'ace');
    console.log(findAceDiamond);

    /* Пошук всіх шісток */
    let findAllSixth = cards.filter(card => card.value === '6');
    console.log(findAllSixth);

    /* Пошук всіх червоних карт */
    let findRedCards = cards.filter(card => card.color === 'red');
    console.log(findRedCards);

    /* Пошук всіх бубн */
    let findSpadeCards = cards.filter(card => card.cardSuit === 'spade');
    console.log(findSpadeCards);

    /* Пошук всіх треф від 9 і більше */
    let findClubsAtNineOrMore = cards.filter(
        card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8'
    );
    console.log(findClubsAtNineOrMore);


/**
 *  Взяти описану колоду карт, та за допомогою reduce упакувати всі карти по "мастях" в об'єкт
 * {
 *     spades:[],
 *     diamonds:[],
 *     hearts:[],
 *     clubs:[]
 * }
 */

    let suitCards = {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: [],
    };

    let reduceCards = cards.reduce((accumulator, value) => {
            if(value.cardSuit === 'spade'){
                accumulator.spades.push(value);
            }
            if(value.cardSuit === 'diamond'){
                accumulator.diamonds.push(value);
            }
            if(value.cardSuit === 'heart'){
                accumulator.hearts.push(value);
            }
            if(value.cardSuit === 'clubs'){
                accumulator.clubs.push(value);
            }
            return accumulator;
        }, suitCards);

    console.log(reduceCards);

/**
 *  Взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
 *      -написати пошук всіх об'єктів, якщо в modules є sass
 *      -написати пошук всіх об'єктів, якщо в modules є docker
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
    function findSass(){
        console.log('Course(s) with sass');
        for (let course of coursesArray) {
            if(course.modules.includes('sass')){
                console.log(course);
            }
        }
    }

    findSass();


    function findDocker(){
        console.log('Course(s) with docker');
            for (let course of coursesArray) {
                if(course.modules.includes('docker')){
                    console.log(course);
                }
            }
    }

    findDocker();

    function findItemsOfArray(arr,search_phrase){
        console.log(`Course(s) with ${search_phrase}`);
        for (let item of arr) {
            if(item.modules.includes(search_phrase)){
                console.log(item);
            }
        }
    }

    findItemsOfArray(coursesArray,'js');