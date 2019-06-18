use webshopping;

create table user (
  id bigint primary key auto_increment,
  account varchar(100) not null unique,
  password varchar(100),
  username varchar(20),
  tel varchar(20),
  phone varchar(20),
  zip_code1 varchar(20),
  zip_code2 varchar(20),
  address varchar(100),
  email varchar(50) not null unique,
  created datetime default current_timestamp,
  updated datetime default current_timestamp on update current_timestamp
) engine=InnodB default charset=utf8mb4;

create table product(
  id bigint primary key auto_increment,
  name varchar(50),
  mileage int,
  price int,
  cost int,
  menu_id bigint,
  sub_menu_id bigint,
  event_id bigint,
  factory varchar(50),
  image varchar(100),
  details text
) engine=InnodB default charset=utf8mb4;

create table cart(
  id bigint primary key auto_increment,
  user_id bigint,
  product_id bigint,
  price int,
  amount int,
  total int
) engine=InnodB default charset=utf8mb4;

create table menu(
  id bigint primary key auto_increment,
  name varchar(50)
);

create table sub_menu(
  id bigint primary key auto_increment,
  menu_id bigint,
  name varchar(50)
);

create table review(
  id bigint primary key auto_increment,
  product_id bigint,
  user_id bigint,
  content text,
  created datetime default current_timestamp,
  updated datetime default current_timestamp on update current_timestamp
) engine=InnodB default charset=utf8mb4;

create table event(
  id bigint primary key auto_increment,
  name varchar(50)
);