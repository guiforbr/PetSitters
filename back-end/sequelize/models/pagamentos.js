const {sequelize, DataTypes} = require('../connection')

const pagamento = sequelize.define('pagamento', {
    pagamento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    status: {
        type: DataTypes.ENUM('aprovado', 'recusado ')
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = pagamento