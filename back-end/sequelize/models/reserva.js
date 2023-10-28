const {sequelize, DataTypes} = require('../connection')
const endereco = require('./endereco')
const cuidador = require('./cuidador')
const proprietario = require('./proprietario')
const pagamento = require('./endereco')



const reserva = sequelize.define('reserva', {
    reserva_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME
    },
    comentario: {
        type: DataTypes.STRING,
        allowNull:false
    }
})



module.exports = reserva