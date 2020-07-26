DROP DATABASE coffeeShop_db;

CREATE DATABASE coffeeShop_db;

USE coffeeShop_db;

CREATE TABLE shops (
    id INT AUTO_INCREMENT,
    shop_name VARCHAR(255),
    item_name1 VARCHAR(255),
    item_name2 VARCHAR(255),
    item_name3 VARCHAR(255),
    item_name4 VARCHAR(255),
    item_name5 VARCHAR(255),
    shop_status VARCHAR (255),
    PRIMARY KEY(id)
);


-- DESCRIBE shops;
/* DESC shops_menu;
 source filename */