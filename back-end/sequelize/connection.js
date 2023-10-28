const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('vigiapets', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = {
    sequelize: sequelize,
    DataTypes: DataTypes
}
