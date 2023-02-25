/**
 *  Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
 *  створити пустий масив, наповнити його 10 об'єктами new User(....)
 */
    function User(id,name,surname,email,phone){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

    let users = [
        new User(1,'Andriy','Bogun','a.bogun@ukr.net','0670081010'),
        new User(2,'Anton','Brodchuk','a.brodchuk@hotmail.com','0680081200'),
        new User(3,'Mykola','Polyovyi','m.polyovyi@gmail.com','0970092110'),
        new User(4,'Karina','Demchenko','k.demchenko@i.ua','0991083090'),
        new User(5,'Anna','Mazur','a.mazur@ukr.net','0730087710'),
        new User(6,'Ivanka','Bilenka','i.bilenka@ukr.net','0958088070'),
        new User(7,'Ilona','Ivasyuk','i.ivasyuk@gmail.com','0979981010'),
        new User(8,'Khrystyna','Chepurna','k.chepurna@outlook.com','0737007912'),
        new User(9,'Svitlana','Dobrovolska','s.dobrovolska@ukr.net','0666781000'),
        new User(10,'Volodymir','Schevchenko','v.chevchenko@i.ua','0969012410')
    ];

    console.log(users);

/**
 *  Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
 */

    let filterUsers = users.filter(user => {
        if(user.id % 2 === 0){
            return user;
        }
    });

    console.log(filterUsers);

/**
 *  Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
 */

    let sortUsers = users.sort((a,b) => { return a.id - b.id; });

    console.log(sortUsers);

/**
 *  Cтворити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
 *  товарів)
 *  Cтворити пустий масив, наповнити його 10 об'єктами Client
 */

    class Client {
        constructor(id,name,surname,email,phone,order) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
    }

    let clients = [
        new Client(
            1, 'Myhailo', 'Shevchuk','m.shevchuk@i.ua','0982000102',['apple']
        ),
        new Client(
            2, 'Anna', 'Vitovska','a.vitovska@i.ua','0683010208',['tomato','banana']
        ),
        new Client(
            3, 'Inna', 'Koval','i.koval@ukr.net','0981012279',['pineapple','orange']
        ),
        new Client(
            4, 'Artem', 'Bogun','a.bogun@ukr.net','0737015577',['orange']
        ),
        new Client(
            5, 'Olena', 'Vityuk','o.vityuk@i.ua','0935217575',['potato','tomato']
        ),
        new Client(
            6, 'Vika', 'Gnatyuk','v.gnatyuk@i.ua','0993415588',['tomato']
        ),
        new Client(
            7, 'Iryna', 'Danylchuk','i.danylchuk@i.ua','0936770099',['apple','tomato']
        ),
        new Client(
            8, 'Olesya', 'Dobra','o.dobra@ukr.net','0977070999',['apple']
        ),
        new Client(
            9, 'Orest', 'Lyutyi','o.lyutyi@i.ua','0632276189',['banana','tomato','lime']
        ),
        new Client(
            10, 'Marichka', 'Vesela','m.vesela@i.ua','0936281199',['potato']
        ),
    ];

    console.log(clients);

/**
 *  Взяти масив (Client [] з попереднього завдання).
 *  Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 */

    let sortOrder = clients.sort((a,b) => {
        return a.order.length - b.order.length;
    });

    console.log(sortOrder);

/**
 *  Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
 *  максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 *     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 *     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 *     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 *     -- changeYear (newValue) - змінює рік випуску на значення newValue
 *     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 */

    function Car(model,manufacture,release_year,max_speed,engine_volume){
        this.model = model;
        this.manufacture = manufacture;
        this.release_year = release_year;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;

        this.drive = () => {
            return `Їдемо зі швидкістю ${this.max_speed} на годину`;
        };
        this.info = () => {
            return JSON.stringify(this).replace(/:/g, " - ");
        };
        this.increaseMaxSpeed = (newSpeed) => {
            return this.max_speed = newSpeed;
        };
        this.changeYear = (newValue) => {
            return this.release_year = newValue;
        };
        this.addDriver = (driver) => {
            return this.driver = driver;
        };
    }

    let car_1 = new Car('X5','BMW','2017','285 km/h','3.0');
        console.log(car_1);
        car_1.increaseMaxSpeed('300 km/h')
        car_1.addDriver({name: 'Artem', exp: 3});
        console.log(car_1.info());

/**
 *  Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
 *  максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 * -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 *     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 *     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 *     -- changeYear (newValue) - змінює рік випуску на значення newValue
 *     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 */

    class singleCar {
        constructor(Model,Manufacture,Release_year,Max_speed,Engine_volume) {
            this.Model = Model;
            this.Manufacture = Manufacture;
            this.Release_year = Release_year;
            this.Max_speed = Max_speed;
            this.Engine_volume = Engine_volume;

            this.drive = () => {
                return `Їдемо зі швидкістю ${this.Max_speed} на годину`;
            };
            this.info = () => {
                return JSON.stringify(this).replace(/:/g, " - ");
            };
            this.increaseMaxSpeed = (newSpeed) => {
                return this.Max_speed = newSpeed;
            };
            this.changeYear = (newValue) => {
                return this.Release_year = newValue;
            };
            this.addDriver = (driver) => {
                return this.driver = driver;
            };
        }
    }

    let car_ = new singleCar('X6','BMW','2022','325 km/h','3.5');
    console.log(car_);
    car_.increaseMaxSpeed('340 km/h')
    car_.addDriver({name: 'Artem', exp: 5});
    console.log(car_.info());

/**
 *  Cтворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
 *  Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 *  За допомоги циклу знайти яка попелюшка повинна бути з принцом.
 *  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
 */

    class Cinderella {
        constructor(name,age,foot_size) {
            this.name = name;
            this.age = age;
            this.foot_size = foot_size;
        }
    }

    let arrayOfCinderella = [
        new Cinderella('Olesya',20,36),
        new Cinderella('Olena',21,37),
        new Cinderella('Miroslava',22,35),
        new Cinderella('Marichka',24,38),
        new Cinderella('Yulya',23,39),
        new Cinderella('Iryna',26,37),
        new Cinderella('Kateryna',25,38),
    ];

    class Prince {
        constructor(name,age,shoe_found) {
            this.name = name;
            this.age = age;
            this.shoe_found = shoe_found;
        }
    }

    let prince_ = new Prince('Mykola',22,35);

    for(let singleCinderella of arrayOfCinderella){
        if(singleCinderella.foot_size === prince_.shoe_found){
            console.log(singleCinderella);
        }
    }

/**
 *  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
 */

    let foundCinderella;

    let findCinderella = arrayOfCinderella.find(cinderella => {
        if(cinderella.foot_size === prince_.shoe_found){
            foundCinderella = cinderella;
            return foundCinderella;
        }
    })

    console.log(findCinderella);