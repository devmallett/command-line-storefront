CREATE DATABASE bamazon;


USE bamazon;


CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30),
department_name VARCHAR(30),
price FLOAT(10, 2),
stock_quantity INTEGER(100),
PRIMARY KEY(item_id)
);

SELECT*FROM bamazon.products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Dev-Phone", "Electronics", 100.99, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Laptop", "Electronics", 400.99, 300);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Printer", "Electronics", 70.99, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Monitor", "Electronics", 175.99, 40);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Casset Tape", "Electronics", 40.99, 3);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Speaker", "Electronics", 95.99, 300);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Galaxy Phone", "Electronics", 300.99, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("iPhone", "Electronics", 500.99, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("ATHs", "Electronics", 175.99, 2);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Mouse", "Electronics", 20.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Tablet", "Electronics", 150.99, 10);
