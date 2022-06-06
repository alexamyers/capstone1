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
    getRoutes: (req, res) => {
        sequelize.query(`SELECT * FROM routes
        WHERE subarea_id = 1;`)
        .then((dbResult) => {
            console.log(dbResult);
            res.status(200).send(dbResult[0]);
        })
        .catch((err) => console.log(err));
    },

    getMeadowRoutes: (req, res) => {
        sequelize.query(`SELECT * FROM routes
        WHERE subarea_id = 3;`)
        .then((dbResult) => {
            console.log(dbResult);
            res.status(200).send(dbResult[0]);
        })
        .catch((err) => console.log(err));
    },

    getSummersvilleRoutes: (req, res) => {
        sequelize.query(`SELECT * FROM routes
        WHERE subarea_id = 2;`)
        .then((dbResult) => {
            console.log(dbResult);
            res.status(200).send(dbResult[0]);
        })
        .catch((err) => console.log(err));
    },

    updateTicklist: (req, res) => {
        const {route_id} = req.body;

        sequelize.query(`INSERT INTO ticklists (route_id)
        VALUES(${route_id})
        RETURNING *;`)
        .then((dbResult) => res.status(200).send(dbResult[0]))
        .catch((err) => console.log(err));
    },

    getTicklist: (req, res) => {
        sequelize.query(`SELECT * FROM ticklists as t 
        join routes on t.route_id = routes.route_id;`)
        .then((dbResult) => {
            console.log(dbResult);
            res.status(200).send(dbResult[0]);
        })
        .catch((err) => console.log(err));
    },


    deleteHouse: (req, res) => {
    const removedRoute = +req.params.id
}

}