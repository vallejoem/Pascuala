show databases;

create database apistore;
use apistore;
create table users(
id int not null auto_increment,
email varchar(50) unique not null,
password varchar(100) not null,
active int,
primary key (id)
);
create table clients(
id int not null auto_increment,
dni int unique,
name varchar(50),
last_name varchar(50),
email varchar(50),
phone varchar(100),
primary key (id)
);
create table products(
id int not null auto_increment,
codigo varchar(50) unique,
name varchar(200),
description text,
price float,
stock int,
photo varchar(50),
primary key (id)
);
create table sales(
id int not null auto_increment,
codigo varchar(50) unique,
date_purchase date,
iva float,
subtotal float,
discount float,
primary key (id)
);
create table detail_sales(
id int not null auto_increment,
quantity int,
amount float,
primary key (id)
);
create table providers(
id int not null auto_increment,
cuit varchar(50) unique,
business_name varchar(100),
email varchar(50),
phone varchar(50),
address varchar(50),
code_postal varchar(10),
primary key (id)
);
alter table users add clients_id int;
alter table sales add clients_id int;
alter table detail_sales add sales_id int;
alter table detail_sales add products_id int;
alter table users add constraint fk_UsersClients
 foreign key (clients_id) references clients(id); 
 alter table sales add constraint fk_SalesClients
 foreign key (clients_id) references clients(id);
 alter table detail_sales add constraint fk_DetailSalesSales
 foreign key (sales_id) references sales(id);
 alter table detail_sales add constraint fk_DetailSalesProducts
 foreign key (products_id) references products(id);
 describe detail_sales;
 