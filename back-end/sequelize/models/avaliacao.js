const {sequelize, DataTypes} = require('../connection')
const cadastro = require('./cadastro')
const cuidador = require('./cuidador')

const avaliacao = sequelize.define('avaliacao', {
    avaliacao_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    comentario: {
        type: DataTypes.STRING,
        allowNull:false
    },
    nota: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

avaliacao.belongsTo(cadastro, {foreignKey: 'autorId'})
avaliacao.belongsTo(cuidador, {foreignKey: 'cuidadorId'})

module.exports = avaliacao