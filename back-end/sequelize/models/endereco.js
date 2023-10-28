const {sequelize, DataTypes} = require('../connection')

const endereco = sequelize.define('endereco', {
    endereco_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    rua: {
        type: DataTypes.STRING,
        allowNull:false
    },
    numero: {
        type: DataTypes.STRING,
        allowNull:false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull:false
    },
    complemento: {
        type: DataTypes.STRING,
    }
})

module.exports = endereco