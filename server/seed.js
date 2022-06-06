require("dotenv").config();
const {CONNECTION_STRING} = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres", 
    dialectOptions: {
        ssl: { 
            rejectUnauthorized: false
        }
    }
});

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists users, climbing_areas, subareas, routes, ticklists CASCADE;

        create table users (
            user_id serial primary key,
            username varchar(100),
            email varchar(200),
            password varchar(200),
            height integer,
            weight integer,
            ape_index integer,
            location varchar(100)
        );

        create table climbing_areas (
            area_id serial primary key, 
            name varchar(100),
            info varchar(500)
        );

        create table subareas (
            subarea_id serial primary key, 
            area_id integer references climbing_areas(area_id),
            name varchar(100),
            directions varchar(500),
            gen_info varchar(500)
        );

        create table routes (
            route_id serial primary key, 
            subarea_id integer references subareas(subarea_id),
            route_name varchar(200),
            difficulty text, 
            style varchar (50)
        );

        create table ticklists (
            ticklist_id serial primary key,
            route_id integer references routes(route_id)
        );

        insert into users (user_id, username, email, password, height, weight, ape_index, location)
        values (1, 'alexmyers', 'alex@gmail.com', 'asdf', '70', '163', '1', 'Charlotte, NC'),
        (2, 'danford', 'dan@yahoo.com', 'sdfg', '64', '144', '3', 'Chattanooga, TN'),
        (3, 'bigmike', 'mike@aol.com', 'dfgh', '74', '185', '-1', 'Roanoke, VA');

        insert into climbing_areas (area_id, name, info)
        values (1, 'New River Proper', 'FILL IN DESC'), 
        (2, 'Meadow River', 'FILL IN DESC'), 
        (3, 'Summersville Lake', 'FILL IN DESC');

        insert into subareas (subarea_id, area_id, name, directions, gen_info)
        values (1, 1, 'Cirque', 'FILL IN DIRECTIONS', 'FILL IN INFO'),
        (2, 3, 'Coliseum', 'FILL IN DIRECTIONS', 'FILL IN INFO'),
        (3, 2, 'Lower Meadow', 'FILL IN DIRECTIONS', 'FILL IN INFO');

        insert into routes (route_id, subarea_id, route_name, difficulty, style)
        values (1, 1, 'Graffiti', '7a+', 'sport'),
        (2, 1, 'Finders Keepers', '7b+', 'sport'), 
        (3, 1, 'Skylore Engine', '7c+', 'sport'), 
        (4, 1, 'Ride the Lightning', '8a+', 'sport'),
        (5, 1, 'The Crouch', '8b', 'sport'),
        (6, 1, 'Proper Soul', '8b+', 'sport'), 
        (7, 1, 'Trebuchet', '8c', 'sport'),
        (8, 2, 'Apollo Reed', '7c+', 'sport'), 
        (9, 2, 'Mercy Seat', '7c+', 'sport'), 
        (10, 2, 'Pod', '8a', 'sport'), 
        (11, 2, 'BC', '8a+', 'sport'), 
        (12, 2, 'Still Life', '8c', 'sport'),
        (13, 2, 'Full Metal Brisket', '9a+', 'sport'),
        (14, 3, 'Toxic Hueco', '7a', 'sport'),
        (15, 3, 'Trojans', '7a+', 'traditional'),
        (16, 3, 'Puppy Chow', '7b+', 'sport'),
        (17, 3, 'Lavendar Days', '7c+', 'sport'),
        (18, 3, 'Greatest Show on Earth', '7c+', 'traditional'),
        (19, 3, 'Mango Tango', '8b+', 'sport');

        insert into ticklists (ticklist_id, route_id)
        values (1, 3);

        `)
    }
}