const {sequelize, DataTypes} = require('../connection')

const cuidador = sequelize.define('cuidador', {
    cuidador_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    experiencia: {

    },
    antecedentes: {

    }
})



module.exports = cuidador