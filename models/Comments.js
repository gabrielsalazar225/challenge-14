const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init ({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    modelName: 'comment'

});
module.exports = Comment;