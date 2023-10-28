const {sequelize, DataTypes} = require('../connection')
const cadastro = require('./cadastro')

const proprietario = sequelize.define('proprietario', {
    proprietario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }
})

proprietario.belongsTo(cadastro, {foreignKey: 'cadastroId'})

module.exports = proprietario