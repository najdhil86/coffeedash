DROP DATABASE coffeeShop_db;
CREATE DATABASE coffeeShop_db;
USE coffeeShop_db;
CREATE TABLE shops (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    is_open BOOLEAN,
    PRIMARY KEY(id)
);
CREATE TABLE shops_menu (
    id INT AUTO_INCREMENT,
    shop_name VARCHAR(255),
    item_name VARCHAR(255),
    PRIMARY KEY(id)
);
INSERT into shops (name, is_open)
VALUES ("Starbucks", true);
-- DESCRIBE shops;
/* DESC shops_menu;
 source filename */