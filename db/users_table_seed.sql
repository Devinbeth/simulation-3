create table if not exists users (
    id serial primary key,
    email varchar(180),
    first_name varchar(180),
    last_name varchar(180),
    gender varchar(6),
    hair_color varchar(6),
    eye_color varchar(6),
    hobby varchar(12),
    birthday_day varchar(2),
    birthday_month varchar(12),
    birthday_year varchar(4),
    auth_id text not null
);
