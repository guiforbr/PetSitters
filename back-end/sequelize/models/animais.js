const {sequelize, DataTypes} = require('../connection')

const animais = sequelize.define('avaliacao', {
    animais_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    especie: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    necessidades: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

module.exports = animais