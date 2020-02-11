const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class Data extends Sequelize.Model {}

Data.init({
    Symbol:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    PrevClose:{
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    OpenPrice:{
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    CompanyName:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    StockPricePercChange:{
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    StockPriceChange:{
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    StockPriceCur:{
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    HIGH52WK_PRICE:{
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    LOW52WK_PRICE:{
        type: Sequelize.INTEGER(),
        allowNull: false
    },
},{sequelize});

module.exports = Data;