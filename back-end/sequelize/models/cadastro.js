const {sequelize, DataTypes} = require('../connection')
const endereco = require('./endereco')

const cadastro = sequelize.define('cadastro', {
    cadastro_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nasc: {
        type: DataTypes.DATE,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

cadastro.belongsTo(endereco, {foreignKey: ('enderecoId')})

module.exports = cadastro