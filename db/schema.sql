-- Create the database day_planner_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
-- **id**: an auto incrementing int that serves as the primary key.
-- **burger_name**: a string.
-- **devoured**: a boolean.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT, 
burgerName varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);

-- Insert a set of records.
--INSERT INTO plans (plan) VALUES ('Plan to fight a ninja.');