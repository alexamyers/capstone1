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
}

