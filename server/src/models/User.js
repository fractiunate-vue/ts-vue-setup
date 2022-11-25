module.exports = (sequelize, DataTypes) =>

    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: DataTypes.STRING,
        createdAt: DataTypes.DATE
    });

