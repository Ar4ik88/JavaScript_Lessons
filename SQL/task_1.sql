-- знайти всі машини старші за 2000 р.
-- SELECT * FROM cars WHERE YEAR > 2000;

-- знайти всі машини молодші 2015 р.
-- SELECT * FROM cars WHERE YEAR < 2015;

-- знайти всі машини 2008, 2009, 2010 років
-- SELECT * FROM cars WHERE YEAR BETWEEN 2008 AND 2010;

-- знайти всі машини не з цих років 2008, 2009, 2010
-- SELECT * FROM cars WHERE YEAR NOT BETWEEN 2008 AND 2010;

-- знайти всі машини bmw старші за 2014 р.
-- SELECT model,YEAR FROM cars WHERE model = 'bmw' AND YEAR > 2014;

-- знайти всі машини audi молодші 2014 р.
-- SELECT model,YEAR FROM cars WHERE model = 'audi' AND YEAR < 2014;

-- знайти перші 5 машин
-- SELECT * FROM cars ORDER BY id ASC LIMIT 5;

-- знайти останні 5 машин
-- SELECT * FROM cars ORDER BY id DESC LIMIT 5;

-- знайти середнє арифметичне цін машини KIA
-- SELECT AVG(PRICE) AS AVG_PRICE,model FROM cars WHERE model = 'kia';

-- знайти середнє арифметичне цін для кожної марки машин окремо
-- SELECT AVG(PRICE) AS AVG_SINGLE_PRICE,model FROM cars GROUP BY model;

-- підрахувати кількість кожної марки
-- SELECT COUNT(model), model FROM cars GROUP BY model;

-- знайти марку машин кількість яких найбільше
-- SELECT model, COUNT(model)
-- FROM cars
-- GROUP BY model
-- ORDER BY COUNT(model) DESC;

-- знайти марку машини в назві яких друга та передостання буква "a"
-- SELECT model FROM cars WHERE model LIKE '_a%' AND model LIKE '%a_';

-- знайти всі машини назва моделі яких більше за 8 символів
-- SELECT model FROM cars WHERE LENGTH(model) > 8;

-- знайти машини ціна котрих більше ніж ціна середнього арифметичного всіх машин
-- SELECT model,price FROM cars WHERE price > (SELECT avg(price) FROM cars) ORDER BY price DESC;
