const sequelize = require('sequelize');

module.exports  = new sequelize('expensetracker', 'root','Akshay@2000', {
    host : "localhost",
    dialect : "mysql"
});
