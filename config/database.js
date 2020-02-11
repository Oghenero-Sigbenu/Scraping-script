const Sequelize = require("sequelize");

//Creates a Sequelize instance and sets the database config
const sequelize = new Sequelize("scraper", "root", "root", {
    host: 'localhost',
    dialect: 'mysql',
    port: "3306",
    // socketPath: '/var/run/mysqld/mysqld.sock'
});

module.exports = sequelize;

