const {Sequelize, Model, DataTypes} = require("sequelize")
const connection = new Sequelize(process.env.PG_CONNECTION_URL)

class TodoModel extends Model {}

TodoModel.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        defaultValue: "",
    }
}, {sequelize: connection, modelName: "Todo"})

module.exports = TodoModel;