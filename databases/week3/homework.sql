-- create database meal_sharing;
use meal_sharing;
CREATE TABLE `meal` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT NOT NULL,
    `price` DECIMAL NOT NULL,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (id)
);
 
CREATE TABLE `reservation` (
	`id` INT NOT NULL,
    `number_of_guests` INT NOT NULL,
    `meal_id` INT UNSIGNED AUTO_INCREMENT,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (meal_id)
);

CREATE TABLE `review` (
	`id` INT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `meal_id` INT UNSIGNED AUTO_INCREMENT,
    `stars` INT UNSIGNED,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (meal_id)
);

describe meal;
-- Get all meals
select * from meal
order by id desc;
-- Add a new meal
insert into meal(
title, 
description, 
location,
 when,
max_reservations, 
price,
created_date) 
value ('Brazilian food1',
'blah blah...',
'Copenhagen',
'2019-11-02 17:35:00',
5,250.0,'2019-11-02'
);
-- Get a meal with any id, fx 1
select * from meal
where id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal set title = 'Italian food1'
where id = 1;
-- Delete a meal with any id, fx 1
delete from meal 
where id = 1;

describe reservation;
-- Get all reservations
select * from reservation
order by id desc;
-- Add a new reservation
insert into reservation(
number_of_guests, 
created_date) 
value (9 ,
'2019-11-02'
);
-- Get a reservation with any id, fx 1
select * from reservation
where id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation set number_of_guests = 8
where id = 1;
-- Delete a reservation with any id, fx 1
delete from reservation 
where id = 1;

describe review;
-- Get all reviews
select * from review
order by id desc;
-- Add a new review
insert into review(
title,
description,
stars,
created_date) 
value ('Brazilizan food1' ,
'blah blah..',
5,
'2019-11-02'
);
-- Get a review with any id, fx 1
select * from review
where id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review set title = 'chiness food'
where id = 1;
-- Delete a review with any id, fx 1
delete from reservation 
where id = 1;
-- Get meals that has a price smaller than a specific price fx 90
select * from meal
where price < 90.00;
-- Get meals that still has available reservations
select meal.title, reservation.id 
 from meal
join reservation on reservation.meal_id = meal.id
group by meal_id;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select title
from meal
where title like 'Rød grød med' or title like 'Rød grød med fløde';
-- Get meals that has been created between two dates
select id , title
from meal
where created_date = '2019-11-02' and '2018-11-02';
-- Get only specific number of meals fx return only 5 meals
select count(id) from meal
order by id desc limit 5 ;
-- Get the meals that have good reviews
select * from review  
where stars >  4;


