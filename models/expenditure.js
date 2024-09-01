const sequelize = require('sequelize');

const sequelise = require('./../util/database');

module.exports = sequelise.define('expenses', {
    id : {
        type : sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    amount :{
        type : sequelize.DOUBLE,
        allowNull : false,
    },
    catogory :{
        type : sequelize.STRING,
        allowNull : false,
        unique : true
    },
    description :{
        type : sequelize.STRING,
        allowNull : false,
        unique : true
    }
})